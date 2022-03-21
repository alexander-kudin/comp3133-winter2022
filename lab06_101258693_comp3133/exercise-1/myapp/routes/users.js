var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  console.log(`First Name: ${req.body.firstname}`)
  console.log(`First Name: ${req.body.lastname}`)

  res.send('POST received!');
});

// Middleware Applied
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;
