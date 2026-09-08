import { useEffect, useState } from "react";
import {
  Provider,
  defaultTheme,
  Heading,
  Text,
  Button,
  Flex,
  Content
} from "@adobe/react-spectrum";
import { attach } from "@adobe/uix-guest";
import { extensionId } from "./Constants";

export default function WorkflowModal() {
  const [connection, setConnection] = useState(null);
  const [working, setWorking] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    attach({ id: extensionId })
      .then(setConnection)
      .catch((error) => {
        console.error("Unable to attach modal", error);
        setMessage("Unable to connect to Universal Editor.");
      });
  }, []);

  const run = async () => {
    if (!connection) return;

    try {
      setWorking(true);
      setMessage("");

      // Replace this with a call to an approved Runtime Action/backend.
      // Never put service secrets in browser extension code.
      await new Promise((resolve) => setTimeout(resolve, 250));

      await connection.host.editorActions.refreshPage();
      setMessage("Operation completed.");
    } catch (error) {
      console.error("Workflow failed", error);
      setMessage("Operation failed.");
    } finally {
      setWorking(false);
    }
  };

  const close = async () => {
    if (connection) {
      await connection.host.modal.close();
    }
  };

  return (
    <Provider theme={defaultTheme}>
      <Content margin="size-300">
        <Flex direction="column" gap="size-200">
          <Heading level={2}>Advanced authoring workflow</Heading>
          <Text>
            Put product search, AI copy generation, validation or external
            workflow UI here.
          </Text>
          {message ? <Text>{message}</Text> : null}
          <Flex gap="size-100">
            <Button variant="cta" onPress={run} isDisabled={working}>
              Run
            </Button>
            <Button variant="secondary" onPress={close}>
              Close
            </Button>
          </Flex>
        </Flex>
      </Content>
    </Provider>
  );
}
