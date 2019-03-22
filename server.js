//Dependencies
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));




app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on port: " + PORT);
  });