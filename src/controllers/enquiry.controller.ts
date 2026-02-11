import { Request, Response } from "express";
import { EnquiryModel } from "../models/enquiry.model";

export const submitEnquiry = async (req: Request, res: Response) => {
  console.log("Enquiry submission request received");
  console.log("Request body:", req.body);

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("Validation failed: Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const enquiry = await EnquiryModel.create({ name, email, message });
    console.log("Enquiry submitted successfully:", enquiry);

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (err: any) {
    console.error("Server error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
