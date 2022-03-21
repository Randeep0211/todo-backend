import Task from "../models/model";
import { Request, Response } from "express";

const toDoList = async (req: Request, res: Response) => {
  const task = new Task(req.body);
  try {
    const response = await task.save();
    res.json({
      response,
    });
  } catch (error) {
    return res.status(403).json({
      Error: "Task failed to save",
    });
  }
};

export default toDoList;
