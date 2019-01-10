//Including this path package allows us to get the correct file path
var path = require("path");

module.exports = function(app){

    //default
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

