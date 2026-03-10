import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};
export default connectDB;
