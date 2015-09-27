var router = require('express').Router();
var fs = require('fs');

router.post('/', (req, res) => {
  let base64String = req.body.data.split(',')[1];
  let fileData = new Buffer(base64String, 'base64');
  fs.writeFile(`./browser/images/duckface/${req.body.name}${new Date()}.png`, fileData, () => res.end());
});

module.exports = router;
