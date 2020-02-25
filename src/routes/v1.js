'use strict';

const express = require('express');
const router = express.Router();

const todo = require('../models/todo.js');


// ROUTES --------------------------------
router.get('/api/v1/todo', handleGetAll);
router.post('/api/v1/todo', handlePost);
router.get('/api/v1/todo', handleGetOne);

router.get('/', (req, res) => {
  res.send('homepage');
})

function handleGetAll(req, res, next) {
  req.model.get()
    .then(record => res.json(record))
    .catch(next);

}
function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => res.json(record))
    .catch(next);
}
function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

module.exports = router;