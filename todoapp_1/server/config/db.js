const mongoose=require("mongoose");
require("dotenv").config();
const connectString=process.env.MONGO_URL;
const connectMongoDB=async()=>{
    try{
        await mongoose.connect(connectString);
        console.log("MongoDb is successfully connected");
    }
    catch(err){
        console.log(`Error while connecting with mongoDb ${err}`);
        process.exit(1);
    }
}

module.exports=connectMongoDB