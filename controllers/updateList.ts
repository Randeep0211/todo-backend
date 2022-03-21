import express from "express";
import { Request, Response } from "express";
import Task from "../models/model";

const updateList = async (req: Request, res: Response) => {
  let payload = req.body.Task;
  let id = req.params.taskId;
  try {
    const response = await Task.findByIdAndUpdate(id, {
      $set: { Task: payload },
    });
    res.json({
      response,
    });
  } catch (error) {
    return res.status(403).json({
      Error: "List Failed to update",
    });
  }
};

export default updateList;
