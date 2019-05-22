var path = require("path");

module.exports = function(app){

    
    //path to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    
    
    //path to the homepage
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    });
}