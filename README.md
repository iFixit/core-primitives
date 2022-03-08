<img width="100%" alt="primitives2" src="https://user-images.githubusercontent.com/705973/52524183-56715680-2c68-11e9-8156-a1e81baa6201.png">

[![npm version](https://img.shields.io/npm/v/@core-ds/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@core-ds/primitives)

- [Reference](https://unpkg.com/@core-ds/primitives)

# Installation

```shell
npm install @core-ds/primitives
```

# Usage

## JavaScript

After installing the [@core-ds/primitives](https://www.npmjs.com/package/@core-ds/primitives) npm package, you can import and apply it in any JavaScript/TypeScript file:

```js
import styled from "styled-components";
import { color, space } from "@core-ds/primitives";

const Example = styled.div`
  color: ${color.white};
  background-color: ${color.blue[500]};
  padding: ${space[4]};

  &:hover {
    background-color: ${color.blue[800]};
  }
`;
```

## LESS

LESS Core Primitives are [globally available](https://github.com/iFixit/ifixit/blob/master/Objects/ScriptView.php) in every LESS file in the [iFixit/ifixit](https://github.com/ifixit/ifixit) repo:

```less
element {
  color: @color-white;
  background-color: @color-blue-500;
  padding: @space-4;

  &:hover {
    background-color: @color-blue-800;
  }
}
```

See the complete list of LESS variables [here](https://unpkg.com/@core-ds/primitives/core-primitives.less).

## CSS Custom Properties (Variables)

CSS Core Primitives are [globally available](https://github.com/iFixit/ifixit/blob/master/Objects/ScriptView.php) on the `:root` (html) element. They can be used in any (P)HTML file:

```css
/* excerpt from core-primitives.css */
:root {
  --color-black: #11161a;
  --color-white: #fff;
  ...
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --color-blue-800: #1e40af;
  ...
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  ...
}
```

```css
/* style the element */
element {
  color: var(--color-white);
  background-color: var(--color-blue-500);
  padding: var(--space-4);

  &:hover {
    background-color: var(--color-blue-800);
  }
}
```

See the current list of CSS Custom Properties [here](https://unpkg.com/@core-ds/primitives/core-primitives.css).

For more capabilities, check out the [MDN Custom Properties article](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

# Contributing

## Local development setup

Follow these steps to get the project setup on your local machine:

```shell
# Clone repo
git clone https://github.com/iFixit/core-primitives.git && cd core-primitives

# Install dependencies
npm install
```

# Adding or Updating Primitives

## 1. Create a new branch

Create a new branch for your changes:

```shell
git checkout -b <branch>
```

## 2. Commit and push changes

Apply your changes to `index.json`, and keep `index.d.ts` in sync.

## 3. Test your build

Run `npm run build` and verify `core-primitives.css` and `core-primitives.less` are correct.

## 4. Open a pull request

Use GitHub to [create a pull request](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request) for your branch.

## 5. Bump the package version

After your pull request has been approved, bump the package version by running:

```shell
npm version [major | minor | patch]
```

Running [`npm version`](https://docs.npmjs.com/cli/version.html) will build, bump the version, and write the new data to `package.json` and `package-lock.json`. It will also create and push a version commit and tag.

> **Note:** In the context of `@core-ds/primitives`, significant changes to the library or workflow, or removing primitives would be considered a major update, adding or updating primitives would be considered a minor update, and fixing primitives would be considered a patch. Non-code changes (e.g. documentation) do not require a version bump.

## 6. Publish to NPM

```shell
npm publish
```

## 7. Create a release

After your pull request has been merged, [create a new release](https://help.github.com/en/articles/creating-releases) to document your changes. Use the tag you generated in step 4 to create the release.

Done 🎉
