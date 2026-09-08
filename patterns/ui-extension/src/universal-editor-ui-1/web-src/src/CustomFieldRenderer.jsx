import { useEffect, useState } from "react";
import {
  Provider,
  defaultTheme,
  TextField,
  ProgressCircle,
  View
} from "@adobe/react-spectrum";
import { attach } from "@adobe/uix-guest";
import { extensionId } from "./Constants";

/**
 * Advanced pattern for a Universal Editor custom field renderer.
 *
 * The current Universal Editor documentation exposes field APIs for
 * model/value/error/validation access and change notification.
 * Verify exact method signatures before production use.
 */
export default function CustomFieldRenderer() {
  const [connection, setConnection] = useState(null);
  const [model, setModel] = useState(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const conn = await attach({ id: extensionId });
        const [fieldModel, fieldValue, fieldError] = await Promise.all([
          conn.host.field.getModel(),
          conn.host.field.getValue(),
          conn.host.field.getError(),
        ]);

        if (!active) return;

        setConnection(conn);
        setModel(fieldModel);
        setValue(fieldValue ?? "");
        setError(fieldError ?? null);
      } catch (e) {
        console.error("Failed to initialize field renderer", e);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const onChange = async (nextValue) => {
    setValue(nextValue);

    if (!connection) return;

    // Verify current field API semantics/signature before production use.
    await connection.host.field.onChange(nextValue);
  };

  if (!model) {
    return (
      <Provider theme={defaultTheme}>
        <View padding="size-200">
          <ProgressCircle aria-label="Loading field" isIndeterminate />
        </View>
      </Provider>
    );
  }

  return (
    <Provider theme={defaultTheme}>
      <View padding="size-100">
        <TextField
          label={model.label || model.name}
          value={String(value)}
          isRequired={Boolean(model.required)}
          isReadOnly={Boolean(model.readOnly)}
          validationState={error ? "invalid" : undefined}
          errorMessage={error || undefined}
          onChange={onChange}
          width="100%"
        />
      </View>
    </Provider>
  );
}
