var express = require('express');
var router = express.Router();

let message = require('../model/messages')

router.put('/', function(req, res, next) {
  console.log(req.body)
  message.create(req.body, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

router.delete('/:id', function(req, res, next) {
  const { id } = req.params;
  message.deleteOne({"_id": id}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }  
  })
})

/* GET all messages */
router.get('/all', function(req, res, next) {
  message.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
