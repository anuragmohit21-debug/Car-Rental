import express from "express";
import { protect } from "../middleware/auth.js";
import {
  addReview,
  getReviews,
} from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", protect, addReview);
reviewRouter.get("/:carId", getReviews);

export default reviewRouter;