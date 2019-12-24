// placeholder
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require("./controllers/burgers_controllers.js");
var port = process.env.PORT || 8080;
var app = express();
var exphbs = require("express-handlebars");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");



app.use("/", routes);

app.listen(port);