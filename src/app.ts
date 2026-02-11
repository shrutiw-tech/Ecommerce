import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";
import enquiryRoutes from "./routes/enquiry.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("REQ =>", req.method, req.url);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/enquiries", enquiryRoutes);



export default app;
