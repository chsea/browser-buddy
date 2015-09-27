var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Buddy = Promise.promisifyAll(mongoose.model('Buddy'));

var seedBuddy =[{
  name: 'Omri',
  defaultPicture: '/images/omri/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
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
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/joe/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/joe/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/joe/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/joe/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/joe/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Zeke',
  defaultPicture: '/images/zeke/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/zeke/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/zeke/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/zeke/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/zeke/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/zeke/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Gabe',
  defaultPicture: '/images/gabe/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/gabe/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/gabe/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/gabe/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/gabe/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/gabe/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Chel',
  defaultPicture: '/images/chel/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/chel/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/chel/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/chel/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/chel/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/chel/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Emily',
  defaultPicture: '/images/emily/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'Backstreet\'s Back!!',
      pictureUrl: '/images/emily/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'I Want It That Way',
      pictureUrl: '/images/emily/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Quit Playing Game With My Heart',
      pictureUrl: '/images/emily/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Show Me The Meaning Of Being Lonely',
      pictureUrl: '/images/emily/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Quack',
      pictureUrl: '/images/emily/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Jon',
  defaultPicture: '/images/jon/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/jon/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/jon/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/jon/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/jon/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/jon/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Beckylee',
  defaultPicture: '/images/beckylee/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/beckylee/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/beckylee/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/beckylee/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/beckylee/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/beckylee/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
},

{
  name: 'Dan',
  defaultPicture: '/images/dan/default.jpg',
  greeting: '/audio/omri/veryhappy.m4a',
  responses: {
    happy: {
      text: 'insert happy response',
      pictureUrl: '/images/dan/happy.jpg',
      audioUrl: '/audio/omri/happy.m4a',
    },
    veryHappy: {
      text: 'Insert very happy response',
      pictureUrl: '/images/dan/veryhappy.jpg',
      audioUrl: '/audio/omri/veryhappy.m4a',
    },
    sad: {
      text: 'Instert sad response',
      pictureUrl: '/images/dan/sad.jpg',
      audioUrl: '/audio/omri/sad.m4a',
    },
    verySad: {
      text: 'Insert very sad response',
      pictureUrl: '/images/dan/verysad.jpg',
      audioUrl: '/audio/omri/verysad.m4a',
    },
    duckFace: {
      text: 'Insert duckface response.',
      pictureUrl: '/images/dan/duckface.jpg',
      audioUrl: '/audio/omri/duckface.m4a',
    }
  }
}

];

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
