var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/getData', function(req, res) {
	User.find({}, function(err, data) {
		if(err) {
			res.send(err);
		}
		console.log(data);
		// res.json(data);
		res.json(data);
	});
	// res.json({'msg':'hello'});
});

router.post('/postData',function(req, res) {
	var user = new User();
	user.name = 'new user' + Math.floor(Math.random() * 100);
	user.task = 'new task' + Math.floor(Math.random() * 100);
	user.IsIntern = [true, false][Math.floor((Math.random() * 1)+0.5)];

	user.save(function(err) {
		if (err) res.send(err);
		console.log(user._id);
		res.json(user);
	});
});

module.exports = router;



	