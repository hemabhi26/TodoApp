const mongoose= require("mongoose");

const todoSchema= new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Please add a name"]
    },
    description: {
        type:String,
    },
    done:{
        type:Boolean,
    }
});
const Todo= mongoose.model("todo", todoSchema);
module.exports= Todo;