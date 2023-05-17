'use strict';

// micro-servicio de conversión de moneda

const { Responder } = require('cote');

// almacen de datos
const tasas = {
  USD_EUR: 0.95,
  EUR_USD: 1.05
};

// lógica del servicio

const responder = new Responder({ name: 'servicio de moneda' });

responder.on('convertir-moneda', (req, done) => {
  const { cantidad, desde, hacia } = req;

  console.log(Date.now(), 'servicio:', cantidad, desde, hacia);

  // calcular la tasa de cambio
  const tasa = tasas[`${desde}_${hacia}`];

  const resultado = cantidad * tasa;

  done(resultado);

});