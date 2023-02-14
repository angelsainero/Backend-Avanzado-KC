const mongoose = require('mongoose');

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 90 }
}, {
  // collection: 'agentes'
});

// crear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema);

// exportar el modelo
module.exports = Agente;