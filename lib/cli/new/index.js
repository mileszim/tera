/** Dependencies */
var path      = require('path');
var Generator = require('./generator.js');


/**
 * Build new Tera App
 */
module.exports = function(scope) {
  scope.name = scope.name.toLowerCase();
  scope.path = path.resolve(scope.path, scope.name);
  
  // Does app dir exist?
  if (Generator.exists(scope.path)) {
    console.log('Error: a folder ' + scope.path + ' already exists.');
    process.exit(1);
  }
  
  // Generate
  console.log('Generating app....');
  var gen = new Generator(scope);
  gen.generate();
  console.log('Generated ' + scope.name + '!');
  
};