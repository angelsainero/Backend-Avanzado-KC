'use strict';

function Persona(nombre) {
  this.nombre = nombre;
}

const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

// añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre) }

pepe.saluda();
luis.saluda();