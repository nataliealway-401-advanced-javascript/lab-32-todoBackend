'use strict';
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  text: { type: String },
  _id: { type: String },
  assignee: { type: String },
  complete: { type: Boolean },
  difficulty: { type: String },
  due: { type: String }
});


module.exports = mongoose.model('todoSchema', todoSchema);