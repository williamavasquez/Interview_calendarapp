
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var calender = require('../models/calender.js');
var connection = require('../config/connection.js');
var bodyParser = require('body-parser');

router.get('/', function(req,res){
  res.render("index")
});

router.post('/calendersave', function(req, res){
  // var now = new Date();
  // "date": dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  // WorkoutId = shortid.generate();
  var date = req.body.date;
  var time = req.body.time;
  var description = req.body.description;


  calender.create(["date", "time", "description"], [date, time, description], function(mycalender){
		res.redirect('/')
	});

});

router.get('/test', function(req, res){
  calender.all(function(data){
      res.json(data)
    })
  })

module.exports = router;
