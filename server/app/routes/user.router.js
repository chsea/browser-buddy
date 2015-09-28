'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var _ = require('lodash');

module.exports = router;

var User = mongoose.model('User');

router.param('id', function(req, res, next, id) {
  User.findById(id).exec()
    .then(function(requestedUser) {
      if (!requestedUser) throw new Error("User not found");
      req.requestedUser = requestedUser;
      next();
    })
    .then(null, next);
});


//GET all users from db
router.get('/', function(req, res, next){
  User.find().exec()
    .then(function(users){
      res.status(200).json(users);
    })
    .then(null, next);
});

//GET one user by id
router.get('/:id', function(req, res, next){
	res.json(req.requestedUser);
});

// UPDATE specific user
router.put('/:id', function(req, res, next) {
    _.extend(req.requestedUser, req.body);
    req.requestedUser.save()
    .then(function(user) {
        res.status(200).json(user);
    })
    .then(null, next);
});


// CREATE a user
router.post('/', function(req, res, next) {
  User.create(req.body)
    .then(function(user) {
      req.login(user, function(err) {
        if (err) next(err);
        else res.status(201).json(user);
      });
    })
    .then(null, next);
});
