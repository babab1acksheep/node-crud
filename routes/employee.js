var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongo = require('mongodb');
var db = mongoose.connect('localhost:27017/EMU');
var Employee = require('../models/employee');
var app = express();

router.get('/create', function(req, res) {
	  res.render('operations/create', { title: 'Create Employee' });
	});
router.get('/read', function(req, res) {
	  res.render('operations/read', { title: 'Read Employee' });
	});
router.get('/update', function(req, res) {
	  res.render('operations/update', { title: 'Update Employee' });
	});

router.get('/delete', function(req, res) {
	  res.render('operations/delete', { title: 'Remove Employee' });
	});


router.post('/addEmployee', function(req, res, next){
		var newEmployee = new Employee({
			name: req.body.empName,
			email: req.body.email,
			empid: req.body.empId
		});
		newEmployee.save(function(err){
			if(err){
				console.log(err);
				res.send("Oops! Problem creating employee");
				res.end();
			}
			else{
				res.send("Employee created successfully");
				res.end();
			}
		});
});

router.post('/findEmployee', function(req,res,next){
		Employee.find({empid:req.body.empId}, function(err, employee){
			if(err){
				console.log(err);
				res.send("Oops! Could not find the employee you are looking for.");
				res.end();
			}
			else{
				console.log(employee);
				res.send(employee);
				res.end();
			}
		});
});

module.exports = router;