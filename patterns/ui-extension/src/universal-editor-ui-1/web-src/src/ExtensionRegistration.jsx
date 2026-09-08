import { useEffect, useState } from "react";
import { register } from "@adobe/uix-guest";
import { Text } from "@adobe/react-spectrum";
import { extensionId } from "./Constants";

/**
 * Demonstrates currently documented Universal Editor UIX concepts.
 *
 * Before production use:
 * - verify the current Adobe Developer API documentation;
 * - validate icon names;
 * - validate exact rightPanel method naming in the installed SDK/docs.
 */
export default function ExtensionRegistration() {
  const [status, setStatus] = useState("Registering");

  useEffect(() => {
    let active = true;

    async function init() {
      try {
        await register({
          id: extensionId,
          methods: {
            headerMenu: {
              getButtons() {
                return [
                  {
                    id: "com.example.aem-universal-editor-toolkit.inspect",
                    label: "Inspect authoring",
                    icon: "Info",
                    onClick: () => {
                      // Keep callbacks small.
                      // In a real extension, open a documented modal route
                      // or invoke a dedicated workflow service.
                      console.info("Inspect authoring action invoked");
                    },
                  },
                ];
              },
            },

            /*
             * Properties-rail extension APIs evolve.
             * Verify current docs before enabling this block.
             *
             * rightPanel: {
             *   addRails() {
             *     return [{
             *       id: "com.example.aem-universal-editor-toolkit.diagnostics",
             *       header: "Diagnostics",
             *       url: "/#/rail/diagnostics",
             *       icon: "Info"
             *     }];
             *   }
             * }
             */
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
