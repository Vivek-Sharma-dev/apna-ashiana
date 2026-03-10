import mongoose from "mongoose";
import Listing from "../models/listing.js";

export const getAllListings = async (req, res) => {
  const allListings = await Listing.find();
  res.status(200).json(allListings);
};

export const getListingById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const place = await Listing.findById(id);
  if (!place) {
    return res.status(404).json({ message: "Listing not found" });
  }
  res.status(200).json(place);
};

export const createListing = async (req, res) => {
  const listing = req.body.listing || req.body;
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
  const newListing = new Listing({ ...listing });
  await newListing.save();
  res.status(201).json(newListing);
};

export const updateListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const updatedListing = req.body.listing;
  Object.keys(updatedListing).forEach((key) => {
    if (
      updatedListing[key] === undefined ||
      updatedListing[key].toString().trim() === ""
    ) {
      delete updatedListing[key];
    }
  });
  const updated = await Listing.findByIdAndUpdate(
    id,
    { $set: updatedListing },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );
  if (!updated) {
    return res.status(404).json({ message: "Listing not found" });
  }
  console.log("Updated listing:", updated);
  res.status(200).json(updated);
};

export const deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const deleted = await Listing.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ message: "Listing not found" });
  }
  console.log("Deleted listing:", deleted);
  res.status(200).json(deleted);
};
