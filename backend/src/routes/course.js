import express from "express";
import { courseModel } from "../db.js";
const courseRouter = express.Router();

courseRouter.get("/bulk", async (req, res) => {
  try {
    const courses = await courseModel.find({});

    res.json({ courses });
  } catch (error) {
    res.json({message:"course finding errors"});
  }
});

courseRouter.get("/purchased", (req, res) => {
  res.json({ message: "Only the purchased course is here" });
});

export default courseRouter;
