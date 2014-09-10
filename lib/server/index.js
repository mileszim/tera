/** Dependencies */
var Tera = require('./tera.js');



/**
 * Tera Server
 */
module.exports = function(port, environment) {
  var port        = port        || 3000;
  var environment = environment || 'development';
  
  var tera = new Tera();
  console.log(tera);
};