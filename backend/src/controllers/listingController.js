import mongoose from "mongoose";
import Listing from "../models/listing.js";

export const getAllListings = async (req, res) => {
  const allListings = await Listing.find({})
    .select("title price location image _id")
    .lean();
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
  const listingData = req.body.listing || req.body;
  let image = {
    url: "",
    filename: "",
  };

  if (req.files && req.files["image"]) {
    const file = req.files["image"][0];
    image.url = file.path;
    image.filename = file.filename;
  }

  const images = [];

  if (req.files && req.files["images"]) {
    const files = req.files["images"];
    files.forEach((file) => {
      images.push({
        url: file.path,
        filename: file.filename,
      });
    });
  }

  const newListing = new Listing({ ...listingData, image, images });
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
