var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Buddy = Promise.promisifyAll(mongoose.model('Buddy'));

var seedBuddy =[{
  name: 'Omri',
  defaultPicture: '/images/omri/default.jpg',
  greeting: '/audio/omri/greeting.m4a',
  description: 'Always Interesting',
  role: 'Instructor',
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
},

{
  name: 'Joe',
  defaultPicture: '/images/joe/default.jpg',
  greeting: '/audio/joe/greeting.m4a',
  description: 'Extra Salty',
  role: 'Instructor',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/joe/happy.jpg',
      audioUrl: '/audio/joe/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/joe/veryhappy.jpg',
      audioUrl: '/audio/joe/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/joe/sad.jpg',
      audioUrl: '/audio/joe/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/joe/verysad.jpg',
      audioUrl: '/audio/joe/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/joe/duckface.jpg',
      audioUrl: '/audio/joe/duckface.m4a',
    }
  }
},

{
  name: 'Zeke',
  defaultPicture: '/images/zeke/default.jpg',
  greeting: '/audio/zeke/greeting.m4a',
  description: 'Has Not Taught 1507',
  role: 'Instructor',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/zeke/happy.jpg',
      audioUrl: '/audio/zeke/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/zeke/veryhappy.jpg',
      audioUrl: '/audio/zeke/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/zeke/sad.jpg',
      audioUrl: '/audio/zeke/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/zeke/verysad.jpg',
      audioUrl: '/audio/zeke/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/zeke/duckface.jpg',
      audioUrl: '/audio/zeke/duckface.m4a',
    }
  }
},

{
  name: 'Gabe',
  defaultPicture: '/images/gabe/default.jpg',
  greeting: '/audio/gabe/greeting.m4a',
  description: 'Japanese Swords',
  role: 'Instructor',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/gabe/happy.jpg',
      audioUrl: '/audio/gabe/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/gabe/veryhappy.jpg',
      audioUrl: '/audio/gabe/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/gabe/sad.jpg',
      audioUrl: '/audio/gabe/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/gabe/verysad.jpg',
      audioUrl: '/audio/gabe/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/gabe/duckface.jpg',
      audioUrl: '/audio/gabe/duckface.m4a',
    }
  }
},

{
  name: 'Chel',
  defaultPicture: '/images/chel/default.jpg',
  greeting: '/audio/chel/greeting.m4a',
  description: 'Very Chill, Always',
  role: 'Student',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/chel/happy.jpg',
      audioUrl: '/audio/chel/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/chel/veryhappy.jpg',
      audioUrl: '/audio/chel/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/chel/sad.jpg',
      audioUrl: '/audio/chel/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/chel/verysad.jpg',
      audioUrl: '/audio/chel/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/chel/duckface.jpg',
      audioUrl: '/audio/chel/duckface.m4a',
    }
  }
},

{
  name: 'Emily',
  defaultPicture: '/images/emily/default.jpg',
  greeting: '/audio/emily/greeting.m4a',
  description: 'Backstreet Boys Enthusiast',
  role: 'Student',
  responses: {
    happy: {
      text: 'Backstreet\'s Back!!',
      pictureUrl: '/images/emily/happy.jpg',
      audioUrl: '/audio/emily/happy.m4a',
    },
    veryHappy: {
      text: 'I Want It That Way',
      pictureUrl: '/images/emily/veryhappy.jpg',
      audioUrl: '/audio/emily/veryhappy.m4a',
    },
    sad: {
      text: 'Quit Playing Game With My Heart',
      pictureUrl: '/images/emily/sad.jpg',
      audioUrl: '/audio/emily/sad.m4a',
    },
    verySad: {
      text: 'Show Me The Meaning Of Being Lonely',
      pictureUrl: '/images/emily/verysad.jpg',
      audioUrl: '/audio/emily/verysad.m4a',
    },
    duckFace: {
      text: 'Quack',
      pictureUrl: '/images/emily/duckface.jpg',
      audioUrl: '/audio/emily/duckface.m4a',
    }
  }
},

{
  name: 'Jon',
  defaultPicture: '/images/jon/default.jpg',
  greeting: '/audio/jon/greeting.m4a',
  description: 'Master of Milkshakes',
  role: 'Student',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/jon/happy.jpg',
      audioUrl: '/audio/jon/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/jon/veryhappy.jpg',
      audioUrl: '/audio/jon/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/jon/sad.jpg',
      audioUrl: '/audio/jon/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/jon/verysad.jpg',
      audioUrl: '/audio/jon/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/jon/duckface.jpg',
      audioUrl: '/audio/jon/duckface.m4a',
    }
  }
},

{
  name: 'Beckylee',
  defaultPicture: '/images/beckylee/default.jpg',
  greeting: '/audio/beckylee/greeting.m4a',
  description: 'Dance Party',
  role: 'Student',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/beckylee/happy.jpg',
      audioUrl: '/audio/beckylee/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/beckylee/veryhappy.jpg',
      audioUrl: '/audio/beckylee/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/beckylee/sad.jpg',
      audioUrl: '/audio/beckylee/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/beckylee/verysad.jpg',
      audioUrl: '/audio/beckylee/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/beckylee/duckface.jpg',
      audioUrl: '/audio/beckylee/duckface.m4a',
    }
  }
},

{
  name: 'Dan',
  defaultPicture: '/images/dan/default.jpg',
  greeting: '/audio/dan/greeting.m4a',
  description: 'Delightful',
  role: 'Student',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/dan/happy.jpg',
      audioUrl: '/audio/dan/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/dan/veryhappy.jpg',
      audioUrl: '/audio/dan/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/dan/sad.jpg',
      audioUrl: '/audio/dan/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/dan/verysad.jpg',
      audioUrl: '/audio/dan/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/dan/duckface.jpg',
      audioUrl: '/audio/dan/duckface.m4a',
    }
  }
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
