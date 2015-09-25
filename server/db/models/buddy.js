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
            url: String
        },
        veryHappy: {
            text: String,
            url: String
        },
        sad: {
            text: String,
            url: String
        },
        verySad: {
            text: String,
            url: String
        },
        happyConsistent: {
            text: String,
            url: String
        },
        sadConsistent: {
            text: String,
            url: String
        },
        duckFace: {
            text: String,
            url: String
        }

    }
});



mongoose.model('Buddy', schema);
