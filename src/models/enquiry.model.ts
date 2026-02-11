import { Schema, model, Document } from "mongoose";

export interface Enquiry extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const enquirySchema = new Schema<Enquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const EnquiryModel = model<Enquiry>("Enquiry", enquirySchema);
