#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || ".";
const interesting = [
  "component-definition.json",
  "component-models.json",
  "component-filters.json",
  "app.config.yaml",
  "ext.config.yaml",
  "AGENTS.md",
  "CLAUDE.md",
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".git", "dist", "build", "target"].includes(entry.name)) continue;

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
    } else if (interesting.includes(entry.name)) {
      console.log(full);
    }
  }
}

walk(root);
