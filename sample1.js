var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Welcome to express.js");
});
var server = app.listen(8000,function(){
    console.log("App listening at port 8000");
});