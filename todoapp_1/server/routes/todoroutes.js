const express=require("express");
const router=express.Router();
const todoController=require("../controllers/todocontrollers");

router.get("/",todoController.getAllTodo)
router.post("/",todoController.createTodo)
router.patch("/:id",todoController.updateTodo)
router.delete("/:id",todoController.deleteTodo)

module.exports=router;