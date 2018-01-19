
var express = require('express');
var ejs = require('ejs')
var app = express();

// lines 7 - 21 run the html file to the localhost
app.set("view engine", "ejs");

var server = app.listen(8080, listening);

function listening(){

   console.log("listening")

}

app.use(express.static("views"))

app.get("/", function(req, res){


	var data = {
    groceries: [{
	store: 'Acme',
	list: [
	    'strawberries',
	    'blueberries',
	    'yogurt',
	    'bananas'
	]
    }, {
	store: 'Corner Market',
	list: [
	    'baguette',
	    'basil',
	    'tomatoes'
	]
    }]
};
    res.render("list",{files: data.groceries});
})

// hard coded into javascript to avoid a JSON file


