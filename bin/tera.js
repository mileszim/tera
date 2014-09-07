#!/usr/bin/env node

/** Dependencies */
var package = require('../package.json');
var program = require('commander');


/**
 * Tera CLI
 */
program
  .version(package.version, '-v, --version')
  .usage('<command> [options]')
  .command('new [app]', 'Create a new Tera app in the current directory')
  .command('generate', 'Generate a model, controller, listener, resource, or migration')
  .command('destroy', 'Destroy a model, controller, listener, resource, or migration')
  .command('server', 'Start the node server (you can also run `node index.js`)')
  .parse(process.argv);


// Print help if nil
program
  .command('*')
  .action(program.help());