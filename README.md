<img width="100%" alt="primitives2" src="https://user-images.githubusercontent.com/705973/52524183-56715680-2c68-11e9-8156-a1e81baa6201.png">

[![npm version](https://img.shields.io/npm/v/@core-ds/primitives.svg?style=flat-square)](https://www.npmjs.com/package/@core-ds/primitives)

- [Reference](https://unpkg.com/@core-ds/primitives)
- [Figma](https://www.figma.com/file/3HaqcNx1TsdkyGAJqHGzZW/Core-Primitives)

# Installation

```shell
npm install @core-ds/primitives
```

# Usage

### JavaScript

After installing the [npm package](https://www.npmjs.com/package/@core-ds/primitives), you can import Core Primitives into any JavaScript/TypeScript file. Here's an example of how you can use Core Primitives with styled-components:

```js
import styled from "styled-components";
import { color, space } from "@core-ds/primitives";

const Example = styled.div`
  color: ${color.white};
  background-color: ${color.blue};
  padding: ${space[4]};

  &:hover {
    background-color: ${color.blueDark1};
  }
`;
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

### CSS Variables

Core Primitives are globally available as [CSS variables](https://unpkg.com/@core-ds/primitives/core-primitives.css) in any (P)HTML file they are linked from. Here's an example of how you can use Core Primitives in an (P)HTML or CSS file:

```html
<!-- link to core-primitives.css in (P)HTML -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@core-ds/primitives/core-primitives.css?v1.x.x"
/>
```

```css
/* excerpt from core-primitives.css */
:root {
  --color-blue: #1975F1;
  ...
  --font-family-inter: 'Inter Var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  ...
}
```

```css
/* use from your stylesheet */
element {
  background-color: var(--color-blue);
  ...
  font-family: var(--font-family-inter);
  ...
}
```

See the complete list of CSS variables [here](https://unpkg.com/@core-ds/primitives/core-primitives.css).

[MDN Custom Properties (AKA: CSS Variables) article](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

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

Apply your changes to `index.json`. Don't forget to keep `index.d.ts` in sync with `index.json`.

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

<!--
Broken, see issue here: https://github.com/iFixit/core-primitives/issues/15
### 5. Merge into master

After your pull request has been approved and the package version has been bumped, go ahead and [merge the pull request](https://help.github.com/en/articles/merging-a-pull-request) into master. You don't have to worry about publishing to npm because we have a GitHub action set up to automatically publish the package when a commit is pushed to master. -->

### 7. Create a release

After your pull request have been merged, [create a new release](https://help.github.com/en/articles/creating-releases) to document your changes. Use the tag you generated in step 4 to create the release.

Done 🎉
