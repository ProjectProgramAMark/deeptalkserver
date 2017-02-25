var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/register', function(req, res, next) {
  // console.log(req.body);
    var user = new User({
        // username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });
    user.save(function(err, user) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(201, user);
    });

    // add sending email validation here

});

router.post('/login', function(req, res, next) {
  // grab array of Users from mongoose here
  console.log(req.body);
  var email = req.body.email;
  var password = req.body.password;
  var query = {};
  query['email'] = email;
  query['password'] = password;
  console.log("query is: ", query);
  User.findOne(query)
    .then((user) => {
      if(!user) {
        res.sendStatus(404);
      }

      res.sendStatus(200);
    })
    .catch((err) => res.sendStatus(500));

});

module.exports = router;
