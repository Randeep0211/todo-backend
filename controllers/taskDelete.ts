import express from "express";
import { Request, Response } from "express";
import Task from "../models/model";

const deleteTask = async (req: Request, res: Response) => {
  let id = req.params.taskId;
  try {
    const response = await Task.findByIdAndDelete(id);
    res.json({
      response,
    });
  } catch (error) {
    return res.status(403).json({
      Error: "Task Failed to delete",
    });
  }
};

export default deleteTask;
