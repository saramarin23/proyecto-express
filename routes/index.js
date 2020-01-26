var express = require('express');
var router = express.Router();

// http://localhost:3000/ping
router.get('/ping', function(req, res, next) {
  res.status(200).json('Server working properly!');
});

module.exports = router;
