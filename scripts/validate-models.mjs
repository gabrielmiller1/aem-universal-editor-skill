#!/usr/bin/env node
import fs from "node:fs";

const files = process.argv.slice(2);
const documentedComponents = new Set([
  "aem-content", "aem-content-fragment", "aem-experience-fragment", "aem-tag",
  "boolean", "checkbox-group", "container", "date-time", "multiselect", "number",
  "radio-group", "reference", "richtext", "select", "tab", "text", "textarea",
]);

if (!files.length) {
  console.error("Usage: node scripts/validate-models.mjs <component-models.json> [component-definition.json]");
  process.exit(2);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    console.error(`Invalid JSON: ${file}\n${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

function validateFields(modelId, fields, parentName = "") {
  for (const field of fields) {
    const fieldPath = parentName ? `${parentName}.${field?.name ?? "<unnamed>"}` : field?.name ?? "<unnamed>";
    if (!field || typeof field !== "object" || !field.name || !field.component) {
      console.error(`Model ${modelId} contains a field without name/component: ${fieldPath}`);
      process.exitCode = 1;
      continue;
    }
    if (typeof field.name !== "string" || typeof field.component !== "string") {
      console.error(`Model ${modelId} field ${fieldPath} must use string name and component`);
      process.exitCode = 1;
    }
    if (field.component.startsWith("com.") || documentedComponents.has(field.component)) {
      // Vendor-prefixed custom renderers and published field components are allowed.
    } else {
      console.warn(`Warning: ${modelId}.${fieldPath} uses unrecognized component "${field.component}"; verify it against current Adobe documentation.`);
    }
    if (typeof field.name === "string" && field.name.includes("_")) {
      console.warn(`Warning: field "${fieldPath}" contains "_" which is not allowed with aem/xwalk plugins.`);
    }
    if (field.multi && Array.isArray(field.fields) && field.fields.some((child) => child?.component === "container")) {
      console.error(`Model ${modelId} multi field ${fieldPath} nests a container, which Universal Editor does not permit.`);
      process.exitCode = 1;
    }
    if (field.fields !== undefined) {
      if (!Array.isArray(field.fields)) {
        console.error(`Model ${modelId} field ${fieldPath} has non-array nested fields`);
        process.exitCode = 1;
      } else {
        validateFields(modelId, field.fields, fieldPath);
      }
    }
  }
}

const models = readJson(files[0]);

if (Array.isArray(models)) {
  const ids = new Set();

  for (const model of models) {
    if (!model?.id || typeof model.id !== "string") {
      console.error("Model without valid id:", model);
      process.exitCode = 1;
      continue;
    }

    if (ids.has(model.id)) {
      console.error(`Duplicate model id: ${model.id}`);
      process.exitCode = 1;
    }

    ids.add(model.id);

    if (!Array.isArray(model.fields)) {
      console.error(`Model ${model.id} has no fields array`);
      process.exitCode = 1;
      continue;
    }

    validateFields(model.id, model.fields);
  }
}

if (files[1]) {
  const definition = readJson(files[1]);

  const components = definition?.groups?.flatMap((group) => group?.components ?? []) ?? definition?.components;
  if (Array.isArray(components) && Array.isArray(models)) {
    const modelIds = new Set(models.map((m) => m.id));

    for (const component of components) {
      if (component.model && !modelIds.has(component.model)) {
        console.error(
          `Component ${component.id ?? "<unknown>"} references missing model ${component.model}`
        );
        process.exitCode = 1;
      }
    }
  }
}

if (!process.exitCode) {
  console.log("Universal Editor model validation passed.");
}
