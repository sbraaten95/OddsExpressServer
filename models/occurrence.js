import mongoose from 'mongoose';
 
const occurrenceSchema = new mongoose.Schema(
  {
    ocType: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);
 
const Occurrence = mongoose.model('Occurrence', occurrenceSchema);

export default Occurrence;