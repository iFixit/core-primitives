<img width="100%" alt="primitives2" src="https://user-images.githubusercontent.com/705973/52524183-56715680-2c68-11e9-8156-a1e81baa6201.png">

[![npm version](https://img.shields.io/npm/v/@core-ds/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@core-ds/primitives)

- [Reference](https://unpkg.com/@core-ds/primitives)
- [Figma](https://www.figma.com/file/3HaqcNx1TsdkyGAJqHGzZW/Core-Primitives)

# Installation

```shell
npm install @core-ds/primitives
```

or in a HTML project:

```html
<link rel="stylesheet" href="https://unpkg.com/@core-ds/primitives/core-primitives.css" />
```

# Usage

### JavaScript

After installing the [npm package](https://www.npmjs.com/package/@core-ds/primitives), you can import Core Primitives into any JavaScript/TypeScript file. Here's an example of how you can use Core Primitives with styled-components:

```js
import styled from "styled-components";
import { color, space } from "@core-ds/primitives";

const Example = styled.div`
  color: ${color.white[400]};
  background-color: ${color.blue[400]};
  padding: ${space[4]};

  &:hover {
    background-color: ${color.blue[800]};
  }
`;
```

### Less

Core Primitives are [globally available](https://github.com/iFixit/ifixit/blob/master/Objects/ScriptView.php) as [Less variables](https://unpkg.com/@core-ds/primitives/core-primitives.less) in every Less file in the [ifixit/ifixit](https://github.com/ifixit/ifixit) repo. Here's an example of how you can use Core Primitives in a Less file:

```less
.selector {
  color: @color-white-400;
  background-color: @color-blue-400;
  padding: @space-4;

  &:hover {
    background-color: @color-blue-800;
  }
}
```

See the complete list of Less variables [here](https://unpkg.com/@core-ds/primitives/core-primitives.less).

### CSS custom properties

Core Primitives are available as [CSS custom properties](https://unpkg.com/@core-ds/primitives/core-primitives.css) in any (P)HTML file they are linked from. Here's an example of how you can use Core Primitives in an (P)HTML or CSS file:

```css
/* excerpt from core-primitives.css */
:root {
  --color-black: #000;
  --color-white: #fff;
  ...
  --color-blue-400: #1975F1;--color-blue-400
  ...
  --font-family-inter: 'Inter Var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  ...
}
```

```css
/* your stylesheet */
.selector {
  background-color: var(--color-blue-400);
  ...
  font-family: var(--font-family-inter);
  ...
}
```

See the complete list of CSS custom properties [here](https://unpkg.com/@core-ds/primitives/core-primitives.css).

[MDN CSS Custom Properties (AKA: CSS variables) article](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

# Contributing

### Local development setup

Follow these steps to get the project setup on your local machine:

```shell
# Clone repo
git clone https://github.com/iFixit/core-primitives.git
cd core-primitives

# Install dependencies
npm install
```

### Adding or updating primitives

### 1. Create a new branch

Create a new branch for your changes:

```shell
git checkout -b <branch>
```

### 2. Commit and push changes

Apply your changes to `index.json`, and keep `index.d.ts` in sync.

### 3. Open a pull request

Use GitHub to [create a pull request](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request) for your branch.

### 4. Bump the package version

After your pull request has been approved, bump the package version by running:

```shell
npm version [patch | minor | major]
```

[`npm version`](https://docs.npmjs.com/cli/version.html) will bump the version and write the new data back to `package.json` and `package-lock.json`. It will also create and push a version commit and tag.

> **Note:** In the context of Core Primitives, significant changes to the library or workflow, or removing primitives would be considered a major update, adding or updating primitives would be considered a minor update, and fixing primitives would be considered a patch. Non-code changes (e.g. documentation) do not require a version bump.

### 5. Build Package

```shell
npm run build
```

### 6. Publish to NPM

```shell
npm publish
```

### 7. Create a release

After your pull request have been merged, [create a new release](https://help.github.com/en/articles/creating-releases) to document your changes. Use the tag you generated in step 4 to create the release.

Done 🎉
