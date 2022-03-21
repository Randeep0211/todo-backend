import express from "express";
import toDoList from "../controllers/taskCreate";
import readList from "../controllers/taskRead";
import updateList from "../controllers/updateList";
import deleteTask from "../controllers/taskDelete";
const routes = express.Router();

routes.post("/todoList", toDoList);
routes.get("/Read", readList);
routes.put("/update/:taskId", updateList);
routes.delete("/Delete/:taskId", deleteTask);

export default routes;
