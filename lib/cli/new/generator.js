/** Dependencies */
var fs        = require('fs-extra');
var path      = require('path');
var structure = require('./structure.js');



/**
 * Generate
 */
var Generator = function(scope) {
  this._name = scope.name;
  this._path = scope.path;
  this._tera = scope.tera;
};

Generator.prototype = {
  
  appPath: function(target_path) {
    return path.resolve(this._path, target_path);
  },
  
  
  copyPath: function(target_path) {
    return path.resolve(this._tera, 'lib/cli/new/copy', target_path);
  },
  
  
  touch: function(file_path) {
    var path = this.appPath(file_path);
    fs.openSync(path, 'w');
  },
  
  
  copy: function(file_path) {
    var path = this.appPath(file_path);
    var file = this.copyPath(file_path);
    fs.copySync(file, path);
  },
  
  
  mkDir: function(dir_path) {
    var path = this.appPath(dir_path);
    fs.mkdirSync(path);
  },
  
  
  traverse: function(entry, dir) {
    dir = dir || '';
    var self = this;
    for (var k in entry) {
      switch(typeof entry[k]) {
      case 'object':
        var current_dir = path.join(dir, k);
        self.mkDir(current_dir);
        self.traverse(entry[k], current_dir);
        break;
      case 'string':
        var file = path.join(dir, k);
        if (entry[k] === 'cp')  {
          self.copy(file);
          continue;
        }
        if (entry[k] === 'touch') {
          self.touch(file);
          continue;
        }
        break;
      }
    }
  },
  
  
  generate: function() {
    // make app dir
    fs.mkdirSync(this._path);
    
    // traverse
    this.traverse(structure);
  }
  
};


/** Class Methods */
Generator.exists = function(path) {
  return fs.existsSync(path);
};


/** Export */
module.exports = Generator;