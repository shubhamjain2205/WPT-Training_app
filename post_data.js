var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const {response} = require("express");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.html", function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
})
app.post("/save", urlencodedParser, function (req, res) {
	resp = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
	}
	console.log(response);
	res.send(JSON.stringify(resp));
});
app.listen(8000, function () {
	console.log("App listening at port 8000");
});