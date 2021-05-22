import mongoose from 'mongoose';
 
import Occurrence from './occurrence.js';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
 
const models = { Occurrence };
 
export { connectDb };
 
export default models;