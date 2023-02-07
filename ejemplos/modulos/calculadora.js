'use strict';

console.log('inicializo la calculadora');

// module.exports = {
//   suma: (a, b) => a + b,
//   resta: (a, b) => a - b,
// }

// exports es un alias a module.exports

exports.suma = (a, b) => a + b;

exports.resta = (a, b) => a - b;