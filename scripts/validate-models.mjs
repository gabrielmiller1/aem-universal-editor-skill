#!/usr/bin/env node
import fs from "node:fs";

const files = process.argv.slice(2);

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

    for (const field of model.fields) {
      if (!field?.name || !field?.component) {
        console.error(`Model ${model.id} contains a field without name/component`, field);
        process.exitCode = 1;
      }

      if (typeof field.name === "string" && field.name.includes("_")) {
        console.warn(
          `Warning: field "${field.name}" contains "_" which is not allowed with some AEM/Universal Editor plugin contexts.`
        );
      }
    }
  }
}

if (files[1]) {
  const definition = readJson(files[1]);

  if (definition?.components && Array.isArray(definition.components) && Array.isArray(models)) {
    const modelIds = new Set(models.map((m) => m.id));

    for (const component of definition.components) {
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
