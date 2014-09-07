#!/usr/bin/env node

/** Depedencies */
var path    = require('path');
var program = require('commander');


/**
 * Tera CLI
 * New
 */
program
  .usage('<name>')
  .parse(process.argv);


// Get scope
var scope = {
  name: program.args[0],
  path: process.cwd(),
  tera: path.resolve(__dirname, '..')
};


// Errors
if (!scope.name) {
  console.log('Please provide a name: `tera new mycoolapp`');
  process.exit(1);
}


// Generate
require(path.resolve(scope.tera, 'lib/cli/new'))(scope);