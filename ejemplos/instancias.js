'use strict';

// crear una función para usarla como construstor de objetos
function Fruta(nombre) {
  // this = {}
  this.nombre = nombre;
  // this = { nombre: 'limon' }
  this.saluda = function() {
    console.log('Hola soy', this.nombre);
  }
  // this = { nombre: 'limon', saluda: Function }
  // return this
}

const limon = new Fruta('limon');

console.log(limon);

limon.saluda();