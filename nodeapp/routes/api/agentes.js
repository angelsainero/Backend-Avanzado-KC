const express = require('express');
const router = express.Router();
const Agente = require('../../models/Agente');

// GET /api/agentes
// Devuelve una lista de agentes
router.get('/', async (req, res, next) => {
  try {

    const agentes = await Agente.find();

    res.json({ results: agentes });

  } catch (error) {
    next(error);
  }
});

// GET /api/agentes/(_id)
// Devuelve un agente buscando por _id
router.get('/:id', async (req, res, next) => {
  try {

    const id = req.params.id;

    const agente = await Agente.findById(id);

    res.json({ result: agente });

  } catch (error) {
    next(error);
  }

});

module.exports = router;