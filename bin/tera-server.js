#!/usr/bin/env node

/** Depedencies */
var program = require('commander');


/**
 * Tera CLI
 * Server
 */
program
  .option('-p, --port [port]', 'Port server will run on')
  .option('-e, --environment [env]', 'Environment of server (development, test, production), default: [development]')
  .parse(process.argv);