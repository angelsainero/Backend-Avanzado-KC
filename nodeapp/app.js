var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const basicAuthMiddleware = require('./lib/basicAuthMiddleware');
const i18n = require('./lib/i18nConfigure');
const LoginController = require('./controllers/loginController');

require('./lib/connectMongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', false);

app.locals.title = 'NodeApp';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rutas del API
 */
app.use('/api/agentes', basicAuthMiddleware, require('./routes/api/agentes'));

app.use(i18n.init);

const loginController = new LoginController();

/**
 * Rutas del Website
 */
app.use('/',      require('./routes/home'));
app.use('/users', require('./routes/users'));
app.use('/features', require('./routes/features'));
app.use('/change-locale', require('./routes/change-locale'));
app.get('/login', loginController.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // comprobar si es un error de validación
  if (err.array) {
    // const errorInfo = err.array({ onlyFirstError: true })[0];
    const errorInfo = err.errors[0];
    err.message = `Error en ${errorInfo.location}, parámetro ${errorInfo.param} ${errorInfo.msg}`;
    err.status = 422;
  }

  res.status(err.status || 500);

  // si lo que ha fallado es una petición al API
  // devuelvo el error en formato JSON
  if (req.originalUrl.startsWith('/api/')) {
    res.json({ error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

module.exports = app;
