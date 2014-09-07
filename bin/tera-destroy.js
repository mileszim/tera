#!/usr/bin/env node

/** Depedencies */
var program = require('commander');


/**
 * Tera CLI
 * Destroy
 */
program
  .usage('<object> [name]');


// Model
program
  .command('model [name]')
  .description('A model')
  .action(function() {
    console.log('model');
  });


// Controller
program
  .command('controller [name]')
  .description('A controller')
  .action(function() {
    console.log('controller');
  });


// Listener
program
  .command('listener [name]')
  .description('A listener')
  .action(function() {
    console.log('listener');
  });


// Resource
program
  .command('resource [name]')
  .description('A resource')
  .action(function() {
    console.log('resource');
  });
  

// Go
program.parse(process.argv);