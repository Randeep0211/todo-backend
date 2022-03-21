import express from "express";
import mongodb from "mongodb";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import todoListRoutes from "./routes/task";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(todoListRoutes);

mongoose
  .connect(
    "mongodb+srv://admin:Qbm3k8lRUySQc4CD@mern.upbgv.mongodb.net/mySecondDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
  });

app.listen(8000, () => {
  console.log("Server Created");
});
