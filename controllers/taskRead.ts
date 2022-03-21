import express from "express";
import { Request, Response } from "express";
import Task from "../models/model";

const readList = async (req: Request, res: Response) => {
  try {
    const response = await Task.find();
    res.json({
      response,
    });
  } catch (error) {
    return res.status(403).json({
      Error: "List Failed to fetch",
    });
  }
};

export default readList;
