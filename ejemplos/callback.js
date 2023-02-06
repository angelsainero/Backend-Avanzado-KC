'use strict';

function suma(a, b, lechuga) {
  const resultado = a + b;
  lechuga(resultado);
}

suma(
  2,
  5,
  function(resultado) {console.log(resultado);}
);