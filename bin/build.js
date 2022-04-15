"use strict";

const fs = require("fs");
const path = require("path");
const primitives = require("../index.json");
const version = process.env.npm_package_version;

// Extracted from https://github.com/joakimbeng/kebab-case/blob/master/index.js
function kebabCase(str) {
  return str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (match) {
    return "-" + match.toLowerCase();
  });
}

// LESS
fs.writeFileSync(
  path.resolve(process.cwd(), "core-primitives.less"),
  [
    `// Core Primitives v${version}
// GENERATED FILE. DO NOT EDIT.
`,
    toLess(primitives),
    ``,
  ]
    .map((string) => string)
    .join("\n")
);

function toLess(obj) {
  return Object.entries(flattenLess(obj))
    .map(([key, value]) => `@${key}: ${value};`)
    .join("\n");
}

// CSS Custom Properties (Variables)
fs.writeFileSync(
  path.resolve(process.cwd(), "core-primitives.css"),
  [
    `/* Core Primitives v${version} */
/* GENERATED FILE. DO NOT EDIT. */

:host,
:root {`,
    toCss(primitives),
    `}
`,
  ].join("\n")
);

function toCss(obj) {
  return Object.entries(flatten(obj))
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");
}

function flatten(obj) {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([key, value]) => {
      if (typeof value === "object") {
        return Object.entries(flatten(value)).reduce(
          (acc, entry) => ({
            ...acc,
            [`${kebabCase(key)}-${kebabCase(entry[0])}`]: entry[1],
          }),
          {}
        );
      } else {
        return { [kebabCase(key)]: value };
      }
    })
  );
}

function flattenLess(obj) {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([key, value]) => {
      // escape LESS minBreakpoint entries
      if (typeof value === "object" && key === "minBreakpoint") {
        return Object.entries(flatten(value)).reduce(
          (acc, entry) => ({
            ...acc,
            [`${kebabCase(key)}-${kebabCase(entry[0])}`]: `~"${entry[1]}"`,
          }),
          {}
        );
      } else if (typeof value === "object") {
        return Object.entries(flatten(value)).reduce(
          (acc, entry) => ({
            ...acc,
            [`${kebabCase(key)}-${kebabCase(entry[0])}`]: entry[1],
          }),
          {}
        );
      } else {
        return { [kebabCase(key)]: value };
      }
    })
  );
}
