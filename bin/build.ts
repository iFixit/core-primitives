import { writeFileSync } from "fs"
import { resolve } from "path"
import kebabCase from "kebab-case"
import primitives from "../index.js"

const package_version = process.env.npm_package_version

// LESS
writeFileSync(
  resolve(process.cwd(), "core-primitives.less"),
  [
    `// Core Primitives v${package_version}
// GENERATED FILE. DO NOT EDIT.
`,
    toLess(primitives),
    ``,
  ]
    .map((string) => string)
    .join("\n")
)

function toLess(obj: object) {
  return Object.entries(flatten(obj))
    .map(([key, value]) => `@${key}: ${value};`)
    .join("\n")
}

// CSS Custom Properties (Variables)
writeFileSync(
  resolve(process.cwd(), "core-primitives.css"),
  [
    `/* Core Primitives v${package_version} */
/* GENERATED FILE. DO NOT EDIT. */

:root {`,
    toCss(primitives),
    `}
`,
  ].join("\n")
)

function toCss(obj: object) {
  return Object.entries(flatten(obj))
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n")
}

function flatten(obj: object) {
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
        )
      } else {
        return { [kebabCase(key)]: value }
      }
    })
  )
}
