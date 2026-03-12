import { fileURLToPath } from "url";
import path from "path";
import mongoose from "mongoose";
import Listing from "../models/listing.js";
import sampleListings from "./data.js";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../.env") });

const MONGO_URL = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};
connectDB();

const seedDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(sampleListings);
    console.log("Sample Listing is uploaded!");
  } catch (err) {
    console.log(`Error is found during inserting sample data ${err}`);
  }
};

seedDB();
