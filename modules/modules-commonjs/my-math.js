// function(exports, require, module, __filename, __dirname) {
'use strict';

exports.sum = function sum(a, b, ...nbs ) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

exports.multiply = function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}


// }
