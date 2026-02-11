import { Router } from "express";
import { submitEnquiry } from "../controllers/enquiry.controller";

const router = Router();

router.post("/submit", submitEnquiry);

export default router;
