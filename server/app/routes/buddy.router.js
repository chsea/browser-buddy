'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var _ = require('lodash');

module.exports = router;

var Buddy = mongoose.model('Buddy');

router.param('id', function(req, res, next, id) {
  Buddy.findById(id).exec()
    .then(function(requestedBuddy) {
      if (!requestedBuddy) throw new Error("Buddy not found");
      req.requestedBuddy = requestedBuddy;
      next();
    })
    .then(null, next);
});

//GET all buddies from db
router.get('/', function(req, res, next){
  Buddy.find(req.query).exec()
    .then(function(buddies){
      res.status(200).json(buddies);
    })
    .then(null, next);
});

//GET one buddy by id
router.get('/:id', function(req, res, next){
  res.json(req.requestedBuddy);
});

//CREATE a new buddy
router.post('/', function(req, res, next){
  Buddy.create(req.body)
    .then(function(newBuddy){
      res.json(newBuddy);
    })
    .then(null, next);
});

//UPDATE a specific buddy
router.put('/:id', function(req, res, next){
  _.merge(req.requestedBuddy, req.body);
  return req.requestedBuddy.save()
    .then(function(savedBuddy){
      res.json(savedBuddy);
    })
    .then(null, next);
});

//DELETE a specific buddy
router.delete('/:id', function(req, res, next){
  req.requestedBuddy.remove()
    .then(function(){
      res.sendStatus(204).send('Buddy deleted!');
    })
    .then(null, next);
});
