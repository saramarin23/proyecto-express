require('dotenv').config(); //Las variables de entorno tienen que ir lo primero
require('./config/db');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// http:localhost:3000/
app.use('/', indexRouter);

// http:localhost:3000/users
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  const errorMessages = {
    404: 'Page not found',
  };
  res.status(err.status || 500).json(errorMessages[err.status] || err.message);
  res.json({ error: err });
});

module.exports = app;
