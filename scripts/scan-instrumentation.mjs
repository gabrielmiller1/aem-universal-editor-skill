#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || ".";
const extensions = new Set([".js", ".jsx", ".ts", ".tsx", ".html", ".htl"]);

const findings = {
  filesScanned: 0,
  dataAueResource: 0,
  dataAueProp: 0,
  dataAueType: 0,
  dataAueFilter: 0,
  dataAueModel: 0,
  obsoleteBehavior: 0,
};

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".git", "dist", "build", "target"].includes(entry.name)) continue;

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(full);
      continue;
    }

    if (!extensions.has(path.extname(entry.name))) continue;

    findings.filesScanned += 1;
    const text = fs.readFileSync(full, "utf8");

    const count = (needle) => (text.match(new RegExp(needle, "g")) || []).length;

    findings.dataAueResource += count("data-aue-resource");
    findings.dataAueProp += count("data-aue-prop");
    findings.dataAueType += count("data-aue-type");
    findings.dataAueFilter += count("data-aue-filter");
    findings.dataAueModel += count("data-aue-model");
    findings.obsoleteBehavior += count("data-aue-behavior");
  }
}

walk(root);

console.log(JSON.stringify(findings, null, 2));

if (findings.obsoleteBehavior > 0) {
  console.error("Found obsolete data-aue-behavior usage.");
  process.exitCode = 1;
}
