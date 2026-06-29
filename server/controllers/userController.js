import User from "../models/User.js";
import Car from "../models/Car.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { sendBookingEmail } from "../utils/emailService.js";
import { sendOtpEmail } from "../utils/emailService.js";

const generateToken = (userId) => {
  return jwt.sign(userId, process.env.JWT_SECRET);
};

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
      return res.json({
        success: false,
        message: "Fill all the fields",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id.toString());

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = generateToken(user._id.toString());

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Data
export const getUserData = async (req, res) => {
  try {
    const { user } = req;

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

  // Get All Cars for the Frontend
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({
      isAvailable: true,
    });

    res.json({
      success: true,
      cars,
    });
  } catch (error) {
    console.log(error.message);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Toggle Wishlist
export const toggleWishlist = async (req, res) => {
  try {
    const { carId } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);

    const exists = user.wishlist.some(
      (item) => item.toString() === carId
    );

    if (exists) {
      user.wishlist = user.wishlist.filter(
        (item) => item.toString() !== carId
      );
    } else {
      user.wishlist.push(carId);
    }

    await user.save();

    res.json({
      success: true,
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.log(error.message);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get Wishlist
export const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("wishlist");

    res.json({
      success: true,
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.log(error.message);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const sendResetOtp = async (
  req,
  res
) => {
  try {
    const { email } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const otp = Math.floor(
      100000 +
        Math.random() * 900000
    ).toString();

    user.resetOtp = otp;
    user.resetOtpExpire =
      Date.now() + 10 * 60 * 1000;

    await user.save();

    await sendOtpEmail(
      email,
      otp
    );

    res.json({
      success: true,
      message:
        "OTP sent successfully",
    });
  } catch (error) {
    console.log(error.message);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyResetOtp = async (
  req,
  res
) => {
  try {
    const { email, otp } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    if (
      user.resetOtp !== otp ||
      user.resetOtpExpire < Date.now()
    ) {
      return res.json({
        success: false,
        message:
          "Invalid or Expired OTP",
      });
    }

    res.json({
      success: true,
      message: "OTP Verified",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (
  req,
  res
) => {
  try {
    const {
      email,
      otp,
      newPassword,
    } = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    if (
      user.resetOtp !== otp ||
      user.resetOtpExpire < Date.now()
    ) {
      return res.json({
        success: false,
        message:
          "Invalid or Expired OTP",
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        newPassword,
        10
      );

    user.password =
      hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpire = null;

    await user.save();

    res.json({
      success: true,
      message:
        "Password Reset Successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};