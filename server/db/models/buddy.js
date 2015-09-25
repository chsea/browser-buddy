'use strict';
var mongoose = require('mongoose');

//will add defaults for images and responses

var schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    picture: {
        sad: String,
        happy: String
    },
    responses: {
        happy: {
            text: String,
            audio: String
        },
        veryHappy: {
            text: String,
            audio: String
        },
        sad: {
            text: String,
            audio: String
        }
        verySad: {
            text: String,
            audio: String
        },
        happyConsistent: {
            text: String,
            audio: String
        },
        sadConsistent: {
            text: String,
            audio: String
        },
        duckFace: {
            text: String,
            audio: String
        }

    }
});



mongoose.model('Buddy', schema);