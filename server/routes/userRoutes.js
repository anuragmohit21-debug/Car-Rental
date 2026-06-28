import express from "express";
import {
    getCars,
    getUserData,
    loginUser,
    registerUser,
    toggleWishlist,
    getWishlist,
} from "../controllers/userController.js";

import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserData);
userRouter.get('/cars', getCars);

userRouter.post('/wishlist', protect, toggleWishlist);
userRouter.get('/wishlist', protect, getWishlist);

export default userRouter;