/** Dependencies */
var path = require('path');


/**
 * Tera Global Object
 */
var Tera = function() {
  this.cwd = process.cwd();
};


/** Export */
module.exports = Tera;