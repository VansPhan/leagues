var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose= require("./db/connection");

var app     = express();

var User = mongoose.model("User");

app.set("port", process.env.PORT || 1337);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "index"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/api/users", function(req, res){
  User.find({}).then(function(users){
    res.json({ users: users });
  });
});

app.get("/api/users/:name", function(req, res){
  User.findOne({name: req.params.name}).then(function(user){
    res.json({ user: user });
  });
});

app.post("/api/users", function(req, res){
  User.create(req.body.user).then(function(user){
    res.redirect("/api/users/" + user.name);
  });
});

app.post("/api/users/:name/delete", function(req, res){
  User.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/api/users")
  });
});

app.post("/api/users/:name", function(req, res){
  User.findOneAndUpdate({name: req.params.name}, req.body.user, {new: true}).then(function(user){
    res.redirect("/api/users/" + user.name);
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
