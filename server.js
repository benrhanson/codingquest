// Require express so that we can build an express app
var express = require('express');

// Require path so that we can use path stuff like path.json
var path = require('path');

// Instantiate the app
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Require the mongoose config files so we can use mongoose
require('./server/config/mongoose.js');

// Require the mongoose js file ***BEFORE*** routes.js file
// Run the codes from routes.js file, passes it app so we can attach routing rules to our express application
// require('./server/config/routes.js')(app);


// Set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

// Set up a static file server that points to "static " directory
app.use(express.static(path.join(__dirname, './static')))
app.listen(8000, function(){
	console.log("The server on port 8000 is running!");
})