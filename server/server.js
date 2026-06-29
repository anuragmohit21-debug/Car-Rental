import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/reviews", reviewRouter);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const shutdown = async (signal) => {
  console.log(`${signal} received. Closing server...`);

  server.close(async () => {
    await mongoose.connection.close();
    console.log("Server and database connection closed");
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
