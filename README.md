# tailwindcss-plugin-ios

## Installation

```bash
npm install -D tailwindcss-plugin-ios
# or
yarn add -D tailwindcss-plugin-ios
# or
pnpm add -D tailwindcss-plugin-ios
```

## Usage

```js
// tailwind.config.js

const ios = require('tailwindcss-plugin-ios');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  plugins: [ios],
};
```

```tsx
<div>
  <div className="ios:text-indigo-500" />
  <div className="not-ios:text-cyan-500" />
</div>
```
