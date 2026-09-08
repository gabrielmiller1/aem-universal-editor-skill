#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const interesting = [
  "component-definition.json",
  "component-models.json",
  "component-filters.json",
  "app.config.yaml",
  "ext.config.yaml",
  "AGENTS.md",
  "CLAUDE.md",
];

const ignoredDirectories = new Set([
  ".git", ".next", "build", "coverage", "dist", "node_modules", "target",
]);

function walk(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (error) {
    console.error(`Unable to read ${dir}: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name) || entry.isSymbolicLink()) continue;

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
    } else if (interesting.includes(entry.name)) {
      console.log(full);
    }
  }
}

if (!fs.statSync(root).isDirectory()) {
  console.error(`Not a directory: ${root}`);
  process.exit(2);
}

walk(root);
