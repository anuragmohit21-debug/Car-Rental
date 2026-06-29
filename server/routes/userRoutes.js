import express from "express";
import {
  getCars,
  getUserData,
  loginUser,
  registerUser,
  toggleWishlist,
  getWishlist,
  sendResetOtp,
  verifyResetOtp,
  resetPassword,
} from "../controllers/userController.js";

import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/data", protect, getUserData);
userRouter.get("/cars", getCars);

userRouter.post(
  "/wishlist",
  protect,
  toggleWishlist
);
userRouter.get(
  "/wishlist",
  protect,
  getWishlist
);

// Forgot Password Routes
userRouter.post(
  "/send-reset-otp",
  sendResetOtp
);

userRouter.post(
  "/verify-reset-otp",
  verifyResetOtp
);

userRouter.post(
  "/reset-password",
  resetPassword
);

export default userRouter;