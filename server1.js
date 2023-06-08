var fs = require("fs");
fs.readFile('data.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString())
})
var data = fs.readFileSync("data.txt");
console.log("Synchronous read: "+ data.toString())