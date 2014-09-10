#!/usr/bin/env node

/** Depedencies */
var program = require('commander');
var fs      = require('fs');
var path    = require('path');


/**
 * Tera CLI
 * Server
 */
program
  .option('-p, --port [port]', 'Port server will run on')
  .option('-e, --environment [env]', 'Environment of server (development, test, production), default: [development]')
  .parse(process.argv);


/**
 * Init
 */
var package;

// Error: no package.json
if (!fs.existsSync(path.join(process.cwd(), 'package.json'))) {
  console.log('Error: package.json does not exist in current directory.');
  process.exit(1);
} else {
  package = require(path.join(process.cwd(), 'package.json'));
}

// Error: tera not dependency
if (!package.dependencies.tera) {
  console.log("Error: package.json does not have Tera as a dependency.");
  process.exit(1);
}

// Error: no index.js
if (!fs.existsSync(path.join(process.cwd(), 'index.js'))) {
  console.log('Error: index.js does not exist in current directoy.');
  process.exit(1);
}


/**
 * Start Tera
 */
require(path.join(process.cwd(), 'index.js'))(program.port, program.env);