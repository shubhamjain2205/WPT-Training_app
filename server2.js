var fs = require("fs");
let data="This is a file conataining details !!!";
fs.writeFile('data.txt',data,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log('File written Success');
    }
})