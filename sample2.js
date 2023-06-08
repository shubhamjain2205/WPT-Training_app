var express = require('express');
var app = express();

app.get('/users',function(req,res){
    res.send("Welcome to express.js-get request");
});
app.post('/save',function(req,res){
    res.send("Welcome to express.js-post request");
});
app.put('/update',function(req,res){
    res.send("Welcome to express.js-put request");
});
app.delete('/',function(req,res){
    res.send("Welcome to express.js-delete request");
});
var server = app.listen(8000,function(){
    console.log("App listening at port 8000");
});