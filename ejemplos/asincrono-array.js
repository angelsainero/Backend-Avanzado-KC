'use strict';

function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

function serie(arr, fn, callback) {
  if (arr.length === 0) {
    // termino el bucle
    callback();
    return;
  }
  fn('texto ' + arr.shift(), () => {
    serie(arr, fn, callback);
  })
}

console.log('inicio');

serie(['uno', 'dos', 'tres', 'cuatro', 'cinco'], escribeTras2Segundos, () => {
  console.log('fin');
})