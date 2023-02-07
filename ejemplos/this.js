'use strict';

// crear una función para usarla como construstor de objetos
function Fruta(nombre) {
  this.nombre = nombre;

  this.saluda = function() {
    console.log('Hola soy', this.nombre);
  }
}

const limon = new Fruta('limon');

// donde están los parentesis de ejecución
// mira lo anterior al punto de la izquierda
// y lo usa como 'this' para el método saluda()
// limon.saluda();

// setTimeout(limon.saluda.bind(limon), 2000);

const unaFuncion = limon.saluda;
// unaFuncion();
unaFuncion.call(limon);