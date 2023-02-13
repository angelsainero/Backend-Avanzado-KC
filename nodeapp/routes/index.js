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

// GET /parametro_en_ruta/68
router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  console.log(req.params);
  const numero = req.params.numero;

  res.send('me has pedido el numero ' + numero);
});

// GET /parametro_opcional/3333
router.get('/parametro_opcional/:numero?', (req, res, next) => {
  console.log(req.params);
  const numero = req.params.numero;

  res.send('(opcional) me has pedido el numero ' + numero);
});

// GET /producto/pantalones/talla/34/color/gris
router.get('/producto/:nombre/talla/:talla([0-9]+)/color/:color', (req, res, next) => {
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;

  res.send(`Me pedíste ${nombre} ${talla} ${color}`);

})

// GET /parametro_query_string?talla=35&color=rojo
router.get('/parametro_query_string', (req, res, next) => {
  const talla = req.query.talla;
  const color = req.query.color;

  res.send(`Me has pedido talla ${talla} y color ${color}`);
})

module.exports = router;
