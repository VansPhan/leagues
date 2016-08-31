var mongoose  = require("mongoose");

var UserSchema = new mongoose.Schema(
	{
		id: Number,
   	name: String
  	}
);

mongoose.model("User", UserSchema);

if(process.env.NODE_ENV == "development"){
  mongoose.connect(process.env.MONGOLAB_URI);
}else{
	mongoose.connect("mongodb://localhost/leagues");
}

module.exports = mongoose;
