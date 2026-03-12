import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  location: { type: String, required: true, trim: true },
  image: {
    type: {
      url: String,
      filename: String,
    },

    default:{
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
      filename: "default listing",
    }
  },
  country: { type: String, required: true, trim: true  },
  images: {
    type: [{
      url: String,
      filename: String
    }],
    default: [],
  }
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
