import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String,
    base_price: { type: Number, required: true },
    image_url: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
