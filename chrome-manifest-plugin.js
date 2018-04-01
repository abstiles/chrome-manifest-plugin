const path = require('path');

function ChromeManifestPlugin(options) {
  const defaults = {
    manifest: './manifest.json',
  };
  this.options = Object.assign({}, defaults, options);
}

ChromeManifestPlugin.prototype.apply = function(compiler) {
  if (Array.isArray(compiler.options.entry)
     || typeof compiler.options.entry === 'string' ) {
    compiler.options.entry = {'main': compiler.options.entry};
  }
  compiler.options.entry.manifest = this.options.manifest;
  compiler.options.output.filename = '[name].js';
  compiler.options.module.rules.push({
    test: /manifest\.json$/,
    loader: path.join(__dirname, "manifest-loader.js"),
  });
};

module.exports = ChromeManifestPlugin;
