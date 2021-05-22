import mongoose from "mongoose";

const occurrenceSchema = new mongoose.Schema(
  {
    ocType: {
      type: String,
      unique: false,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    initCause: {
      type: String,
      unique: false,
      required: true,
    },
    cessaCause: {
      type: String,
      unique: false,
      required: true,
    },
    timeBegun: {
      type: Date,
      required: true,
    },
    timeEnded: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Occurrence = mongoose.model("Occurrence", occurrenceSchema);

export default Occurrence;
