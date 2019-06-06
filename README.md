# Core Primitives

[![npm version](https://img.shields.io/npm/v/@core-ds/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@core-ds/primitives)

- [Reference](https://unpkg.com/@core-ds/primitives)
- [Figma](https://www.figma.com/file/3HaqcNx1TsdkyGAJqHGzZW/Core-Primitives)

## Installation

```shell
npm install @core-ds/primitives
```

## Usage

### JavaScript

After installing the [npm package](https://www.npmjs.com/package/@core-ds/primitives), you can import Core Primitives into any JavaScript/TypeScript file. Here's an example of how you can use Core Primitives with styled-components:

```js
import styled from 'styled-components'
import { color, space } from '@core-ds/primitives'

const Example = styled.div`
  color: ${color.white};
  background-color: ${color.blue};
  padding: ${space[4]};

  &:hover {
    background-color: ${color.blueDark1};
  }
`
```

### Less

Core Primitives are [globally available](https://github.com/iFixit/ifixit/blob/master/Objects/ScriptView.php) as [Less variables](https://unpkg.com/@core-ds/primitives/core-primitives.less) in every Less file in the [ifixit/ifixit](https://github.com/ifixit/ifixit) repo. Here's an example of how you can use Core Primitives in a Less file:

```less
.example {
  color: @color-white;
  background-color: @color-blue;
  padding: @space-4;

  &:hover {
    background-color: @color-blue-dark-1;
  }
}
```

See the complete list of Less variables [here](https://unpkg.com/@core-ds/primitives/core-primitives.less).
