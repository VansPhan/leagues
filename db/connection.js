var mongoose  = require("mongoose");

var UserSchema = new mongoose.Schema(
	{
		id: Number,
   	name: String
  	}
);

mongoose.model("User", UserSchema);
mongoose.connect("mongodb://localhost/leagues");

module.exports = mongoose;
