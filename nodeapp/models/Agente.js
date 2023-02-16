const mongoose = require('mongoose');

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 90 },
  email: String
}, {
  // collection: 'agentes'
});

// Tipos de métodos:
// - Agente.createWithColor('red')  --> método estático
// - agente.sendEmail({ subject: 'asdsa' }) --> método de instancia (no usar arrow functions)

agenteSchema.statics.lista = function(filtro) {
  const query = Agente.find(filtro);
  // ...
  return query.exec();
}

// crear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// exportar el modelo
module.exports = Agente;