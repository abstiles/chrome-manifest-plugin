const loaderUtils = require('loader-utils');
const fs = require('fs');

module.exports = function(source) {
  let options = loaderUtils.getOptions(this);
  const pkg = JSON.parse(fs.readFileSync('./package.json'));
  const merged = Object.assign({}, {
    'manifest_version': 2,
    'name': pkg.name,
    'description': pkg.description,
    'version': pkg.version,
    'author': pkg.author,
    'homepage_url': pkg.homepage,
  }, JSON.parse(source));
  const mergedJson = JSON.stringify(merged);
  this.emitFile('manifest.json', mergedJson);
  return mergedJson;
};
