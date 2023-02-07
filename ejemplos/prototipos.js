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

// Herencia simple ---------------------------------

function Agente(nombre) {
  // heredar el constructor de las personas
  // llamar al constructor de las personas con mi this
  Persona.call(this, nombre);
}

// heredar propiedades de las personas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente('Smith');

smith.saluda();

// Herencia múltiple -------------------------------------

// Mixin
function Superheroe() {
  this.vuela = function() { console.log(this.nombre, 'vuela')};
}

// copiar todas las propidades de los Superheroes al prototipo del Agente
const supeheroe = new Superheroe();
console.log(supeheroe);
Object.assign(Agente.prototype, supeheroe);

smith.vuela();

console.log(smith);
console.log(Agente.prototype);
console.log(Persona.prototype);