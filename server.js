var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

//This sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing below will point our server to a series of "routing" files
//These Routes give our server a "map" on how to respond when the user vists our requests data

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

//Starting our server
app.listen(PORT, function () {
    console.log(`App is listening on PORT: ${PORT}`);
});
