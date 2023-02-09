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

router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  console.log(req.params);
  const numero = req.params.numero;

  res.send('me has pedido el numero ' + numero);
});

router.get('/parametro_opcional/:numero?', (req, res, next) => {
  console.log(req.params);
  const numero = req.params.numero;

  res.send('(opcional) me has pedido el numero ' + numero);
});

router.get('/producto/:nombre/talla/:talla([0-9]+)/color/:color', (req, res, next) => {
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;

  res.send(`Me pedíste ${nombre} ${talla} ${color}`);

})

module.exports = router;
