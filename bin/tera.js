#!/usr/bin/env node

/** Dependencies */
var package = require('../package.json');
var program = require('commander');


/**
 * Tera CLI
 */
program
  .version(package.version, '-v, --version')
  .command('new [app]', 'Generate a new Tera app')
  .command('generate', 'Generate a model, controller, listener, resource, or migration')
  .command('destroy', 'Destroy a model, controller, listener, resource, or migration')
  .command('server', 'Start the node server (you can also run `node index.js`)')
  .parse(process.argv);