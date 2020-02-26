'use strict';

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};


mongoose
  .connect('mongodb://localhost:27017/todo', mongooseOptions)
  .catch(err => console.log(err));

require('./src/server.js').start(3000);