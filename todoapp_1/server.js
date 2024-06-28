const express=require("express");
const connectMongoDB=require("./server/config/db.js");
const cors=require("cors");
const todoRoutes=require("./server/routes/todoroutes.js");
require('dotenv').config();

const app=express();
app.use(express.json());
const port=process.env.PORT || 8000;

connectMongoDB();

app.use(cors({origin:"http://localhost:3000"},{credentials:true}));
//Routes
app.use("/api/todo", todoRoutes);

app.listen(port,()=>{
    console.log(`Todo App Server is listening on port ${port}`);
})