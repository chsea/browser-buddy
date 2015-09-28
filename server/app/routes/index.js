'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/buddy', require('./buddy.router'));
router.use('/upload', require('./upload.router'));
router.use('/user', require('./user.router'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
