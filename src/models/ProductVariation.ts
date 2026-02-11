import mongoose from "mongoose";

const ProductVariationSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    color: { type: String, enum: ["Black", "White", "Purple"], required: true },
    size: { type: String, enum: ["S", "M", "L", "XL"], required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("ProductVariation", ProductVariationSchema);
