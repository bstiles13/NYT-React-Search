//Dependecies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

//Define server and middleware
var PORT = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
