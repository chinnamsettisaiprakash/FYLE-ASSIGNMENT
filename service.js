var express = require('express');
var app = express(),
    http = require('http').Server(app),
    port = '3000',
    bankBranchesService = require('./service/bankBranches.service.js'),
    cookieParser = require('cookie-parser');

app.use(cookieParser()); 
app.use(express.json());
app.use(express.urlencoded());


app.post('/api/branches/create', function(req,res) {
  bankBranchesService.bankBranchesCreate(req,res);
});

app.get('/api/branches/autocomplete', function(req,res) {
  bankBranchesService.getBankBranchDetails(req,res);
});

app.get('/api/branches', function(req,res) {
  bankBranchesService.getBankBranchSearchDetails(req,res);
});

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'); next();
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});