#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const extensions = new Set([".js", ".jsx", ".ts", ".tsx", ".html", ".htl"]);

const findings = {
  filesScanned: 0,
  dataAueResource: 0,
  dataAueProp: 0,
  dataAueType: 0,
  dataAueFilter: 0,
  dataAueModel: 0,
  obsoleteBehavior: 0,
  filesWithObsoleteBehavior: [],
};

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
    const obsoleteInFile = count("data-aue-behavior\\s*=");
    findings.obsoleteBehavior += obsoleteInFile;
    if (obsoleteInFile) findings.filesWithObsoleteBehavior.push(full);
  }
}

if (!fs.statSync(root).isDirectory()) {
  console.error(`Not a directory: ${root}`);
  process.exit(2);
}

walk(root);

console.log(JSON.stringify(findings, null, 2));

if (findings.obsoleteBehavior > 0) {
  console.error("Found obsolete data-aue-behavior usage.");
  process.exitCode = 1;
}
