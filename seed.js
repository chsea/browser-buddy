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
      text: 'Yeah, that won\'t last long',
      pictureUrl: '/images/joe/happy.jpg',
      audioUrl: '/audio/joe/happy.m4a',
    },
    veryHappy: {
      text: 'You\'re doing this wrong. There\'s nothing that can make you feel that way',
      pictureUrl: '/images/joe/veryhappy.jpg',
      audioUrl: '/audio/joe/veryhappy.m4a',
    },
    sad: {
      text: 'There you go. That\'s better. That\'s about where you want to be.',
      pictureUrl: '/images/joe/sad.jpg',
      audioUrl: '/audio/joe/sad.m4a',
    },
    verySad: {
      text: 'You\'ve learned well. Good job',
      pictureUrl: '/images/joe/verysad.jpg',
      audioUrl: '/audio/joe/verysad.m4a',
    },
    duckFace: {
      text: 'Oh God...Why are you making that face? That\'s terrible.',
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
      text: 'Hmmm :)',
      pictureUrl: '/images/zeke/happy.jpg',
      audioUrl: '/audio/zeke/happy.m4a',
    },
    veryHappy: {
      text: 'Yay',
      pictureUrl: '/images/zeke/veryhappy.jpg',
      audioUrl: '/audio/zeke/veryhappy.m4a',
    },
    sad: {
      text: 'Hmmmmm... :(',
      pictureUrl: '/images/zeke/sad.jpg',
      audioUrl: '/audio/zeke/sad.m4a',
    },
    verySad: {
      text: 'Awwww',
      pictureUrl: '/images/zeke/verysad.jpg',
      audioUrl: '/audio/zeke/verysad.m4a',
    },
    duckFace: {
      text: 'Quack.',
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
      text: 'Hey! :)',
      pictureUrl: '/images/gabe/happy.jpg',
      audioUrl: '/audio/gabe/happy.m4a',
    },
    veryHappy: {
      text: 'Awesome! :D',
      pictureUrl: '/images/gabe/veryhappy.jpg',
      audioUrl: '/audio/gabe/veryhappy.m4a',
    },
    sad: {
      text: 'Awwww :(',
      pictureUrl: '/images/gabe/sad.jpg',
      audioUrl: '/audio/gabe/sad.m4a',
    },
    verySad: {
      text: 'NoOoOoOo :\'(',
      pictureUrl: '/images/gabe/verysad.jpg',
      audioUrl: '/audio/gabe/verysad.m4a',
    },
    duckFace: {
      text: 'Uhhhhhhhh....',
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
      text: 'That\'s nice, but...are you still coding?',
      pictureUrl: '/images/chel/happy.jpg',
      audioUrl: '/audio/chel/happy.m4a',
    },
    veryHappy: {
      text: 'Woah, woah--tone it down a notch!',
      pictureUrl: '/images/chel/veryhappy.jpg',
      audioUrl: '/audio/chel/veryhappy.m4a',
    },
    sad: {
      text: 'I feel bad, but, uhhh...that\'s not going to interfere with you gettting your work done, is it?',
      pictureUrl: '/images/chel/sad.jpg',
      audioUrl: '/audio/chel/sad.m4a',
    },
    verySad: {
      text: 'Cheer up buddy, uhhhh, there\'s more Angular to write',
      pictureUrl: '/images/chel/verysad.jpg',
      audioUrl: '/audio/chel/verysad.m4a',
    },
    duckFace: {
      text: 'Work it, girl.',
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
      text: 'I\'m so glad that we\'re here. Wow, I\'m having such a good time',
      pictureUrl: '/images/jon/happy.jpg',
      audioUrl: '/audio/jon/happy.m4a',
    },
    veryHappy: {
      text: 'Awww man, this is a good day',
      pictureUrl: '/images/jon/veryhappy.jpg',
      audioUrl: '/audio/jon/veryhappy.m4a',
    },
    sad: {
      text: 'Damn...you know...It\'s just...spiders in the dumpster',
      pictureUrl: '/images/jon/sad.jpg',
      audioUrl: '/audio/jon/sad.m4a',
    },
    verySad: {
      text: 'I sorry, girl',
      pictureUrl: '/images/jon/verysad.jpg',
      audioUrl: '/audio/jon/verysad.m4a',
    },
    duckFace: {
      text: 'Oh wow that\'s a great duckface you got there! Wooow.',
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
      text: 'Yayyy! :)',
      pictureUrl: '/images/beckylee/happy.jpg',
      audioUrl: '/audio/beckylee/happy.m4a',
    },
    veryHappy: {
      text: 'Woo-Hoo!!! :D',
      pictureUrl: '/images/beckylee/veryhappy.jpg',
      audioUrl: '/audio/beckylee/veryhappy.m4a',
    },
    sad: {
      text: 'Awwww :(',
      pictureUrl: '/images/beckylee/sad.jpg',
      audioUrl: '/audio/beckylee/sad.m4a',
    },
    verySad: {
      text: 'Noooooo :\'(',
      pictureUrl: '/images/beckylee/verysad.jpg',
      audioUrl: '/audio/beckylee/verysad.m4a',
    },
    duckFace: {
      text: 'What is that?',
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
      text: 'Wow! You look really happy!',
      pictureUrl: '/images/dan/happy.jpg',
      audioUrl: '/audio/dan/happy.m4a',
    },
    veryHappy: {
      text: 'Holy crap...Why are you so happy?',
      pictureUrl: '/images/dan/veryhappy.jpg',
      audioUrl: '/audio/dan/veryhappy.m4a',
    },
    sad: {
      text: 'You look a little bummed',
      pictureUrl: '/images/dan/sad.jpg',
      audioUrl: '/audio/dan/sad.m4a',
    },
    verySad: {
      text: 'Wow, you look really sad. You should probably go home',
      pictureUrl: '/images/dan/verysad.jpg',
      audioUrl: '/audio/dan/verysad.m4a',
    },
    duckFace: {
      text: 'Uhhh, what is that?',
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
