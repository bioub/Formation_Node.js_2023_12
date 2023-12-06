// function(exports, require, module, __filename, __dirname) {
'use strict';

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

// remplace exports par hello
module.exports = hello;

// }
