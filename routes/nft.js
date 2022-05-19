var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/nft', function (req, res) {
  console.log(req.body.body);
  console.log('Post received: ' + req.params.title);
  console.log("hi");
  res.json({
    success: true,
  });
});


module.exports = router;
