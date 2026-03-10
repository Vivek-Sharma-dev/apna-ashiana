import mongoose from "mongoose";

const hostSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    image: {
        default:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
        type: String,
        trim: true,
    },
    description: { type: String, required: true, trim: true },
    joinAt: { type: Date, default: Date.now() },
});

const Host = mongoose.model("Host", hostSchema);