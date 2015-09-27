'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  defaultPicture: {
    type: String,
    required: true
  },
  greeting: {
    type: String
  },
  responses: {
    happy: {
      text: String,
      audioUrl: String,
      pictureUrl: String
    },
    veryHappy: {
      text: String,
      audioUrl: String,
      pictureUrl: String
    },
    sad: {
      text: String,
      audioUrl: String,
      pictureUrl: String
    },
    verySad: {
      text: String,
      audioUrl: String,
      pictureUrl: String
    },
    duckFace: {
      text: String,
      audioUrl: String,
      pictureUrl: String
    }
  }
});

mongoose.model('Buddy', schema);
