const fs = require('fs')
const path = require('path')
const kebabCase = require('lodash.kebabcase')
const primitives = require('..')

fs.writeFileSync(
  path.resolve(__dirname, '../core-primitives.less'),
  `/* GENERATED FILE. DO NOT EDIT. */\n${toLess(primitives)}`,
)

function toLess(obj) {
  return Object.entries(flatten(obj))
    .map(([key, value]) => `@${key}: ${value};`)
    .join('\n')
}

function flatten(obj) {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'object') {
        return Object.entries(flatten(value)).reduce(
          (acc, entry) => ({
            ...acc,
            [`${kebabCase(key)}-${kebabCase(entry[0])}`]: entry[1],
          }),
          {},
        )
      } else {
        return { [kebabCase(key)]: value }
      }
    }),
  )
}
