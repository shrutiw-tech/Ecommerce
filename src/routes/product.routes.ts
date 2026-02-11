import { Router } from "express";
import Product from "../models/Product";
import ProductVariation from "../models/ProductVariation";

const router = Router();

/* ================= PRODUCTS ================= */

// Get all products
router.get("/", async (_, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// Get single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Create product (Admin)
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

// Update product
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  await ProductVariation.deleteMany({ product_id: req.params.id });
  res.json({ message: "Product deleted" });
});

/* ================= VARIATIONS ================= */

// Get variations of a product
router.get("/:id/variations", async (req, res) => {
  const variations = await ProductVariation.find({ product_id: req.params.id });
  res.json(variations);
});

// Add variation
router.post("/:id/variations", async (req, res) => {
  const variation = await ProductVariation.create({
    product_id: req.params.id,
    ...req.body,
  });
  res.status(201).json(variation);
});

export default router;
