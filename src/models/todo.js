'use strict';

const schema = require('./todo-schema.js');
const mongoModel = require('@trevorthompson/mongo-model');


class TodoModel extends mongoModel {
constructor(schema) { 
    super(schema); 
}
}

module.exports = new TodoModel(schema);
