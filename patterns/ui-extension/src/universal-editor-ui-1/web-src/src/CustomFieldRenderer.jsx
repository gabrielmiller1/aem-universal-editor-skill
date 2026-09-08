import { useEffect, useState } from "react";
import {
  Provider,
  defaultTheme,
  TextField,
  ProgressCircle,
  View,
  Text
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
  const [validationState, setValidationState] = useState(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const conn = await attach({ id: extensionId });
        const [fieldModel, fieldValue, fieldError, nextValidationState] = await Promise.all([
          conn.host.field.getModel(),
          conn.host.field.getValue(),
          conn.host.field.getError(),
          conn.host.field.getValidationState(),
        ]);

        if (!active) return;

        setConnection(conn);
        setModel(fieldModel);
        setValue(fieldValue ?? "");
        setError(fieldError ?? null);
        setValidationState(nextValidationState ?? null);
        await conn.host.field.setHeight(160);
      } catch (e) {
        if (active) setLoadError("Unable to load this field.");
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const onChange = async (nextValue) => {
    const normalizedValue = nextValue.trim();
    setValue(normalizedValue);

    if (!connection || model?.readOnly) return;

    try {
      await connection.host.field.onChange(normalizedValue);
      setError(null);
    } catch {
      setError("Unable to save the selected value.");
    }
  };

  if (loadError) {
    return (
      <Provider theme={defaultTheme}>
        <View padding="size-100"><Text>{loadError}</Text></View>
      </Provider>
    );
  }

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
          validationState={error ? "invalid" : validationState || undefined}
          errorMessage={error || undefined}
          onChange={onChange}
          width="100%"
        />
      </View>
    </Provider>
  );
}
