import express from "express";
import adminRoute from "./routes/admin.js";
import userRouter from "./routes/user.js";
import mongoose from "mongoose";
import courseRouter from "./routes/course.js";
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URL;

const app = express();

const Port = 3000;

app.use(express.json());
async function main() {
  try {
      await mongoose.connect(mongoURI
     
      // Add other Mongoose connection options as needed
    );
    console.log('MongoDB connected successfully!');


    app.use("/api/v1/user", userRouter);
    app.use("/api/v1/admin", adminRoute);
    app.use("/api/v1/course", courseRouter);

    app.listen(Port, () => {
      console.log(`server is running on Port : ${Port}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

main();
