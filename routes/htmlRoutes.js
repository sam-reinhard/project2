const db = require("../models");
const passport = require("../config/passport");
const path = require("path");

module.exports = function (app) {
    
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.post("/login", passport.authenticate("local"), function (req, res) {
        res.status(200).json({url:"/api/strays"});
    });

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    app.post("/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.status(200).json({url:"/api/strays"});
        });
    });

    app.get("/search", function (req, res) {
        // let currentPath = __dirname.slice(0, (__dirname.length - 6));
        // console.log(currentPath);
        res.sendFile(path.join(__dirname, "../public/search.html"));
    });

    app.get("/lost", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/lost.html"));
    });

    app.get("/found", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/found.html"));
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};