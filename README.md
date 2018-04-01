[![npm](https://img.shields.io/npm/v/chrome-manifest-plugin.svg)](https://www.npmjs.com/package/chrome-manifest-plugin)
[![npm](https://img.shields.io/npm/dt/chrome-manifest-plugin.svg)](https://www.npmjs.com/package/chrome-manifest-plugin)
[![npm](https://img.shields.io/npm/l/chrome-manifest-plugin.svg)](https://www.npmjs.com/package/chrome-manifest-plugin)

Plugin for Webpack that keeps a Chrome extension's manifest file up-to-date
with package.json.

## Install

Installable through npm:

`npm install --save-dev chrome-manifest-plugin`

## Usage

Assuming you have a `package.json` file, make sure you have your
`manifest.json` file also at the top directory. You may remove from it the
following fields, which will be pulled from your `package.json` file:

* `name`
* `description`
* `version`
* `author`
* `homepage_url`

Now, create a Webpack config file if you haven't already, and add this plugin
to your plugins list. An example `webpack.config.js`:

```javascript
const ChromeManifestPlugin = require('chrome-manifest-plugin');

module.exports = {
  entry: {
      'content-script': './src/content-script.js'
  },
  plugins: [ new ChromeManifestPlugin() ]
};
```

Now, when running webpack, it will build a `manifest.json` which includes the
same information as your `package.json`.
