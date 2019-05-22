var express = require ("express");
var path = require ("path");
// var bodyParser = require("body-parser")

var app = express();

var PORT = process.env.PORT || 8888;

//api and html routing
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  



