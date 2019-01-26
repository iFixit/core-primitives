# Core Primitives

[![npm version](https://img.shields.io/npm/v/@core-ds/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@core-ds/primitives)

**⚠️ Work in progress**

```shell
npm install @core-ds/primitives
```

## Usage

### Less

Core Primitives are [globally available](https://github.com/iFixit/ifixit/blob/master/Objects/ScriptView.php) as [Less variables](https://unpkg.com/@core-ds/primitives/core-primitives.less) in every Less file in the [ifixit/ifixit](https://github.com/ifixit/ifixit) repo. Here's an example of how you can use Core Primitives in a Less file:

```less
.example {
  color: @color-white;
  background-color: @color-blue;

  &:hover {
    background-color: @color-blue-dark-1;
  }
}
```

See the complete list of Less variables [here](https://unpkg.com/@core-ds/primitives/core-primitives.less).
