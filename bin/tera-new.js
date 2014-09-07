#!/usr/bin/env node

/** Depedencies */
var program = require('commander');


/**
 * Tera CLI
 * New
 */
program
  .usage('<name>')
  .parse(process.argv);

var p = program.args;

console.log(program);