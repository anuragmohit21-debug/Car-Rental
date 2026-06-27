import dns from "node:dns";
import mongoose from "mongoose";

const getDnsServers = () => {
  return (process.env.MONGODB_DNS_SERVERS || "")
    .split(",")
    .map((server) => server.trim())
    .filter(Boolean);
};

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in .env");
    }

    const dnsServers = getDnsServers();
    if (dnsServers.length > 0) {
      dns.setServers(dnsServers);
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "car-rental",
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Database Connected");
  } catch (error) {
    console.error("Database Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;



