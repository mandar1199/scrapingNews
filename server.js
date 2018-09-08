//dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//PORT 5000
var PORT = process.env.PORT || 5000;

//express app
var app = express();

//express router
var router = express.Router();

//route files pass router object
require("./config/routes")(router);

//designate public folder as a static directory
app.use(express.static(__dirname + "/public"));

//connecting handlebars to the express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));

//every request goes through router middleware
app.use(router);

//connecting to mongodb to use database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connecting mongoose to our database
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection is successful");
    }
});

//listen on port
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});