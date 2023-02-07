'use strict';

// cargar la librería de express
const express = require('express');

// crear la aplicación
const app = express()

// añadimos una ruta
app.get('/', (request, response, next) => {
  response.send('Hola');
});

// arrancar el servidor
app.listen(8080, () => {
  console.log('Servidor HTTP arrancado  en http://127.0.0.1:8080');
});