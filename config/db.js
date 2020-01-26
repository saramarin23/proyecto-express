const mongoose = require('mongoose');
const debug = require('debug')('upgrade-media:db');

const DB_URI = process.env.DB_URI;

mongoose
  //Me conecto
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  //Resuelvo
  .then(() => {
    debug(`Connected to DB: ${DB_URI}`);
  })
  //Fallo
  .catch(err => {
    debug(`There was an error trying to connect to the database: ${DB_URI}`);
    debug(error);
  });
