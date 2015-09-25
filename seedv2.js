var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Buddy = Promise.promisifyAll(mongoose.model('Buddy'));
//var Faker = require('faker');
var _ = require('lodash');

// Clear database
User.remove({}, function(err, removed) {
  if (err) console.log(err);
});

Buddy.remove({}, function(err, removed) {
  if (err) console.log(err);
});


var seedBuddy =[{
  firstName: 'Omri',
  lastName: 'Zeke',
  picture: 'http://www.fullstackacademy.com/img/team/omri_bernstein@2x.jpg',
  responses: {
    happy: {text: 'Interesting'},
    veryHappy: {text: 'Oh interesting'},
    sad: {text: 'Hmmm...interesting...'},
    verySad: {text: 'Well, that is interesting'},
    happyConsistent: {text: 'Interesting...'},
    sadConsistent: {text: 'Well...Interesting...'},
    duckFace: {text: 'Interesting duck face...'}
  }
},
{
  firstName: 'Joe',
  lastName: 'Salty',
  picture: 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10959514_10100487453212058_9140311506332778584_n.jpg?oh=b5f675e9062fafd5506b94f80c5c63c3&oe=5696E12B',
  responses: {
    happy: {text: 'Something happy salty'},
    veryHappy: {text: 'Something extra salty'},
    sad: {text: 'Salty salty salty'},
    verySad: {text: 'Sooooo salty'},
    happyConsistent: {text: 'Still salty'},
    sadConsistent: {text: 'Extra salty'},
    duckFace: {text: 'What a salty duck face'}
  }
},
{
  firstName: 'Patrick',
  lastName: 'The Dog',
  picture: 'http://a57.foxnews.com/global.fncstatic.com/static/managed/img/fn2/feeds/LiveScience/876/493/dog-bacteria.jpg?ve=1&tl=1',
  responses: {
    happy: {text: 'Woof'},
    veryHappy: {text: 'Woof'},
    sad: {text: 'Woof'},
    verySad: {text: 'Woof'},
    happyConsistent: {text: 'Woof'},
    sadConsistent: {text: 'Woof'},
    duckFace: {text: 'Woof'}
  }
},
{
  firstName: 'Girlfriend',
  lastName: 'Barbie',
  picture: 'http://soulation.org/jonalynblog/wp-content/uploads/2014/02/barbie-mattel-stock-mat.jpg',
  responses: {
    happy: {text: 'You are doing such a great job! You\'re the best!'},
    veryHappy: {text: 'Wow! Amazing!'},
    sad: {text: 'Don\'t worry, honey! You\'ll figure it out'},
    verySad: {text: 'Awwww it will be okay. JavaScript is hard!'},
    happyConsistent: {text: 'Go you, greatest programmer in the world!'},
    sadConsistent: {text: 'Maybe it\'s time to take a break.'},
    duckFace: {text: 'Quack Quack! Awesome duck face!'}
  }
}
];



connectToDb.then(function() {
  var saveBuddies;
  // Users
  Buddy.createAsync(seedBuddy)
    .then(function(buddies) {
      saveBuddies = buddies;
    })
    .then(function() {
      console.log(chalk.green('Seed successful!'));
      process.kill(0);
    })
    .catch(function(err) {
      console.error(err);
      process.kill(1);
    });
});








