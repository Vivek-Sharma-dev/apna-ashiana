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
  res.send("Welcome to Apna Ashiana");
});

// index route
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find();
    if (allListings.length === 0) {
      return res.status(404).json({ message: "DataBase is Empty" });
    }
    res.status(200).json(allListings);
  } catch (err) {
    console.log(`error is found during fetching data from DataBase ${err}`);
  }
});

() => {};

// show route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const place = await Listing.findById(id);
  if (!place) {
    return res
      .status(404)
      .json({ message: "place not exist in the database!" });
  }
  res.status(200).json(place);
});

app.post("/listings", async (req, res) => {
  const listing = req.body.listing;

  const requiredFields = [
    "title",
    "description",
    "price",
    "location",
    "country",
  ];
  for (const field of requiredFields) {
    if (!listing[field] || listing[field].toString().trim() === "") {
      return res
        .status(400)
        .json({ message: `Missing required field: ${field}` });
    }
  }
  try {
    const newListing = new Listing({ ...listing });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    console.log("Error saving new listing:", err);
    res.status(500).json({ message: "Error saving new listing" });
  }
  res.send("Data received successfully");
});

// update route
app.patch("/listings/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const updatedListing = req.body.listing;
  Object.keys(updatedListing).forEach((key) => {
    if(updatedListing[key] === undefined || updatedListing[key].toString().trim() === "") {
      delete updatedListing[key];
    }
  })
  try {
    const updated = await Listing.findByIdAndUpdate(id, {$set: updatedListing}, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Listing not found" });
    }
    console.log("Updated listing:", updated);
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating listing" });
  }
});

app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  try {
    const deleted = await Listing.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Listing not found" });
    }
    console.log("Deleted listing:", deleted);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Error deleting listing" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
