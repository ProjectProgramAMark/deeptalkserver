var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/register', function(req, res, next) {
    var user = new User({
        username: req.username,
        password: req.password,
        email: req.email
    });
    user.save(function(err, res) {
        if (err) {
            return next(err)
        }
        res.json(201, res)
    });
});

module.exports = router;
