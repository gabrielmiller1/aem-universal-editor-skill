import { useEffect, useState } from "react";
import {
  Provider,
  defaultTheme,
  Content,
  Heading,
  Text,
  Button,
  Flex
} from "@adobe/react-spectrum";
import { attach } from "@adobe/uix-guest";
import { extensionId } from "./Constants";

export default function DiagnosticsRail() {
  const [connection, setConnection] = useState(null);
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  async function loadEditorState(conn) {
    const next = await conn.host.editorState.get();
    setState(next);
  }

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const conn = await attach({ id: extensionId });
        if (!active) return;
        setConnection(conn);
        await loadEditorState(conn);
      } catch (e) {
        if (active) setError(e);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const refresh = async () => {
    if (!connection) return;
    await connection.host.editorActions.refreshPage();
    await loadEditorState(connection);
  };

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <Content margin="size-200">
        <Flex direction="column" gap="size-150">
          <Heading level={3}>Authoring diagnostics</Heading>
          {error ? <Text>Unable to connect to Universal Editor.</Text> : null}
          <Text>
            {state ? "Editor state loaded." : "Loading editor state…"}
          </Text>
          <Button
            variant="secondary"
            isDisabled={!connection}
            onPress={refresh}
          >
            Refresh editor
          </Button>
        </Flex>
      </Content>
    </Provider>
  );
}
