import Review from "../models/Review.js";
import Car from "../models/Car.js";

export const addReview = async (req, res) => {
  try {
    const { carId, rating, comment } = req.body;

    const review = await Review.create({
      car: carId,
      user: req.user._id,
      rating,
      comment,
    });

    const reviews = await Review.find({ car: carId });

    const average =
      reviews.reduce((acc, item) => acc + item.rating, 0) /
      reviews.length;

    await Car.findByIdAndUpdate(carId, {
      rating: average,
      totalReviews: reviews.length,
    });

    res.json({
      success: true,
      message: "Review Added",
      review,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { carId } = req.params;

    const reviews = await Review.find({
      car: carId,
    }).populate("user", "name image");

    res.json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};