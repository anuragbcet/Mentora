import express from "express";
const userRouter = express.Router();
import { userModel, courseModel, adminModel, purchaseModel } from "../db.js";
import jwt from "jsonwebtoken";
const JWT_USER_SECRET = "jkscgbksdajcfb";

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    // Create a new instance of the User model
    const newUser = new userModel({
      email,
      firstName,
      lastName,
      password,
    });

    // Save the new User to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the newly created USer
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle validation or other errors
  }
});

userRouter.post("/signin", (req, res) => {
  const { email, password } = req.body; //Add zod validation here;

  //and the password needs to be hashed ,then you can't compare it directly

  const user = userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_SECRET
    );
    res.json({ token: token });
  } else {
    res.json({ message: "Invalid credential" });
  }
});

userRouter.put("/purchase", (req, res) => {
  res.json({ message: "course is purchased" });
});

export default userRouter;
