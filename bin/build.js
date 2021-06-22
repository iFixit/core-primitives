const fs = require("fs");
const path = require("path");
const kebabCase = require("lodash.kebabcase");
const { version } = require("../package.json");
const primitives = require("..");

fs.writeFileSync(
  path.resolve(process.cwd(), "core-primitives.less"),
  [
    `// Core Primitives v${version}
// GENERATED FILE. DO NOT EDIT.`,
    toLess(primitives),
  ]
    .map((string) => string)
    .join("\n")
);

function toLess(obj) {
  return Object.entries(flatten(obj))
    .map(([key, value]) => `@${key}: ${value};`)
    .join("\n");
}

fs.writeFileSync(
  path.resolve(process.cwd(), "core-primitives.css"),
  [
    `/* Core Primitives v${version} */
/* GENERATED FILE. DO NOT EDIT. */`,
    `:root {`,
    toCssVars(primitives),
    `}`,
  ].join("\n")
);

function toCssVars(obj) {
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
