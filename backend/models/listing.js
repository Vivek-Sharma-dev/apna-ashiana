import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  image: {
    default:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    type: String,
    required: true,
    set: (v) => (v.trim() === "" ? "https://via.placeholder.com/150" : v),
  },
  country: { type: String, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
