'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');

// Model
const todoModel = require('./models/todo.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/todo', (req, res)=> {
  todoModel.get()
  .then(results => res.send(results))
  .catch(error => console.log(error));
});

app.post('/todo', (req, res)=> {
  todoModel.post(req.body)
  .then(results => res.send(results))
  .catch(error => console.log(error));
});

app.delete('/todo:id', (req, res) => {
  todoModel.delete(req.params.id)
  .then(results => res.send(results))
  .catch(error => console.log(error));
});



module.exports = {
  server: app,
  start: port =>
    app.listen(port, () => console.log(`Server up and running on port ${port}`))
};