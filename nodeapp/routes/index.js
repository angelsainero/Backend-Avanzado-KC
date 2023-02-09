var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.nombre = '<script>alert("inyección de código")</script>';

  res.locals.usuarios = [
    { nombre: 'Smith', edad: 34 },
    { nombre: 'Jones', edad: 23 }
  ];

  const ahora = new Date();
  res.locals.paridad = (ahora.getSeconds() % 2) === 0;
  res.locals.segundoActual = ahora.getSeconds();

  // res.render('index', { title: 'NodeApp' });
  res.render('index');
});

module.exports = router;
