import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
  Task: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Task", modelSchema);
