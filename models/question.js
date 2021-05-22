import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      unique: true,
      required: true,
    },
    inferences: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;
