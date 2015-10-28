var router = require('express').Router();
var fs = require('fs');
var mkdirp = require('mkdirp');
var request = require('request');

router.post('/', (req, res) => {
  var base64String = req.body.data.split(',')[1];
  var fileData = new Buffer(base64String, 'base64');
  mkdirp(`./browser/images/${req.body.name}`, err => {
    if (err) return console.log(err);
    fs.writeFile(`./browser/images/${req.body.name}/${req.body.emotion.toLowerCase()}.jpg`, fileData, () => res.end());
  });
});

router.post('/duckface', (req, res) => {
  let base64String = req.body.data.split(',')[1];
  let fileData = new Buffer(base64String, 'base64');
  let filePath = `./browser/images/duckface/duckface${new Date()}.png`;
  fs.writeFile(filePath, fileData, () => {
    let token = `xoxp-2151814398-8254410327-11427501573-5ba99c517f`;
    request.post({
      url: 'https://slack.com/api/files.upload',
      formData: {
        token: token,
        channels: 'G0BCG459V',
        title: 'hashtag duckface',
        file: fs.createReadStream(filePath),
      }
    }, function(error, response, body){
      if (error) return console.log(error);
      console.log(body);
    });
    res.end();
  });
});

module.exports = router;
