var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
	  name: String,
	  email: String,
	  empid: Number,
	  created_at: Date,
	  updated_at: Date
	});

var Employee = mongoose.model('Employee', employeeSchema);


module.exports = Employee;