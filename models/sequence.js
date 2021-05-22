import mongoose from "mongoose";

const sequenceSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      unique: true,
      required: true,
    },
    occurrences: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Sequence = mongoose.model("Sequence", sequenceSchema);

export default Sequence;
