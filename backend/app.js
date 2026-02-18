import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Listing from "./models/listing.js";

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Apna Ashiana")
})


// index route
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find();
    if(allListings.length === 0) {
      return res.status(404).json({message: "DataBase is Empty"})
    }
    res.status(200).json(allListings);
  } catch (err) {
    console.log(`error is found during fetching data from DataBase ${err}`)
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
