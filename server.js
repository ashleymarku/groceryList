
var express = require('express');
var pug = require('pug');
var ejs = require('ejs');
var app = express();

// lines 7 - 21 run the html file to the localhost
app.set("view engine", "ejs", "pug");


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
	    'tomatoes',
	    'meat', 
	    'beer',
	    'milk',
	    'water',
	    'peanut butter'
	]
    }]
};
    res.render("list.ejs",{files: data.groceries});
})

// hard coded into javascript to avoid a JSON file


