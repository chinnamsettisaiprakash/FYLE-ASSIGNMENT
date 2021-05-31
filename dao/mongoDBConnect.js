// Connect to DB instance
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

// Bank Branches Schema
var bankBranchSchema = new mongoose.Schema({
   ifsc: String,
   bank_id: String,
   branch: String,
   address: String,
   city: String,
   district: String,
   state: String
});

var bankBranchSchemaData = mongoose.model('bankBranchSchema', bankBranchSchema);


//Export each instance
exports.bankBranchSchema = bankBranchSchemaData;
