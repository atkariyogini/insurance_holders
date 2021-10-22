//Step 1: Database connection
const mongoose = require("mongoose");

//mongodb:"127.0.0.1:27017/yoginidb";
//const conn_str = "mongodb:localhost:8080/user";
//const conn_str ="//yoginiatkari:yogini@cluster0.wcfh6.mongodb.net/user"

const conn_str = "mongodb://yogi:yogi@cluster0-shard-00-00.wcfh6.mongodb.net:27017,cluster0-shard-00-01.wcfh6.mongodb.net:27017,cluster0-shard-00-02.wcfh6.mongodb.net:27017/diit?ssl=true&replicaSet=atlas-f1ldyn-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age : Number,
	city: String
	
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);

exports.User = userObject;
