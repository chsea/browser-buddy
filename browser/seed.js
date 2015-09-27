var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Buddy = Promise.promisifyAll(mongoose.model('Buddy'));

var seedBuddy =[{
  name: 'Omri',
  defaultPicture: '/images/omri/default.jpg',
  responses: {
    happy: {
      text: 'Interesting! :)',
      pictureUrl: '/images/omri/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Inter-ESTing. :D',
      pictureUrl: '/images/omri/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Interesting. :(',
      pictureUrl: '/images/omri/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: '...Interesting. :\'(',
      pictureUrl: '/images/omri/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Mm, not interesting.',
      pictureUrl: '/images/omri/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
// },
// {
//   firstName: 'Joe',
//   lastName: 'Salty',
//   picture: 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10959514_10100487453212058_9140311506332778584_n.jpg?oh=b5f675e9062fafd5506b94f80c5c63c3&oe=5696E12B',
//   responses: {
//     happy: {text: 'Something happy salty'},
//     veryHappy: {text: 'Something extra salty'},
//     sad: {text: 'Salty salty salty'},
//     verySad: {text: 'Sooooo salty'},
//     happyConsistent: {text: 'Still salty'},
//     sadConsistent: {text: 'Extra salty'},
//     duckFace: {text: 'What a salty duck face'}
//   }
// },
// {
//   firstName: 'Patrick',
//   lastName: 'The Dog',
//   picture: 'http://a57.foxnews.com/global.fncstatic.com/static/managed/img/fn2/feeds/LiveScience/876/493/dog-bacteria.jpg?ve=1&tl=1',
//   responses: {
//     happy: {text: 'Woof'},
//     veryHappy: {text: 'Woof'},
//     sad: {text: 'Woof'},
//     verySad: {text: 'Woof'},
//     happyConsistent: {text: 'Woof'},
//     sadConsistent: {text: 'Woof'},
//     duckFace: {text: 'Woof'}
//   }
}];

connectToDb.then(function() {
  var saveBuddies;
  Buddy.remove({}).
    then(function() {
      return Buddy.createAsync(seedBuddy);
    })
    .then(function(buddies) {
      console.log(chalk.green(buddies.length, ' buddies seeded!'));
      process.kill(0);
    })
    .catch(function(err) {
      console.error(err);
      process.kill(1);
    });
});
