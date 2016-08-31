var mongoose  = require("mongoose");

var UserSchema = new mongoose.Schema(
	{
		id: Number,
   	name: String
  	}
);

mongoose.model("User", UserSchema);
if(process.env.NODE_ENV == "production"){
  mongoose.connect("mongodb://heroku_hl91kltt:phk9ika2q0agckndmm0ccfr4tm@ds019866.mlab.com:19866/heroku_hl91kltt");
}else{
	mongoose.connect("mongodb://localhost/leagues");
}

module.exports = mongoose;
