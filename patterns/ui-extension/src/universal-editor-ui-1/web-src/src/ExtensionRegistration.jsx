import { useEffect, useState } from "react";
import { register } from "@adobe/uix-guest";
import { Text } from "@adobe/react-spectrum";
import { extensionId } from "./Constants";

/**
 * Documented UIX pattern as of 2026-09-08. Re-check the current Adobe UIX
 * reference and Extension Manager setup before deploying.
 */
export default function ExtensionRegistration() {
  const [status, setStatus] = useState("Registering");

  useEffect(() => {
    let active = true;

    async function init() {
      try {
        const connection = await register({
          id: extensionId,
          methods: {
            headerMenu: {
              getButtons() {
                return [
                  {
                    id: "com.example.aem-universal-editor-toolkit.inspect",
                    label: "Inspect authoring",
                    icon: "Info",
                    onClick: async () => {
                      await connection.host.modal.showUrl({
                        title: "Authoring workflow",
                        url: "/#/modal",
                        width: "900px",
                        loading: true,
                      });
                    },
                  },
                ];
              },
            },

            rightPanel: {
              addRails() {
                return [{
                  id: "com.example.aem-universal-editor-toolkit.diagnostics",
                  header: "Authoring diagnostics",
                  url: "/#/rail/diagnostics",
                  icon: "Info",
                }];
              },
            },
            canvas: {
              getRenderers() {
                return [{
                  dataType: "com.example.product-reference",
                  url: "/#/renderer/product-reference",
                  icon: "Search",
                }];
              },
            },
          },
        });

        if (active) setStatus("Registered");
      } catch (error) {
        console.error("Universal Editor extension registration failed", error);
        if (active) setStatus("Registration failed");
      }
    }

    init();
    return () => {
      active = false;
    };
  }, []);

  return <Text>{status}</Text>;
}
