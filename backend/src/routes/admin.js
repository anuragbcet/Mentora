import express from "express";
import { adminModel } from "../db.js";
import jwt from "jsonwebtoken";

const JWT_ADMIN_SECRET="skjgdkgfsjkb";

const adminRoute = express.Router();

adminRoute.post("/signup", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    //check the pre existing user
    //hash password before saving it to the database using bcrypt library

    const newAdmin = await adminModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

adminRoute.post("/signin", (req, res) => {

    const {email,password}=req.body;

    const admin = adminModel.findOne({
        email,
        password
    })

    if(admin){
        const token = jwt.sign({
            id : admin._id
        },JWT_ADMIN_SECRET);
        res.status(201).json({token:token});
    }else{
        res.status(400).json({message:"Inavlid login credential"});
    }
});

adminRoute.put("/course", (req, res) => {
  res.json({ message: "Route to add the new course" });
});

adminRoute.get("/course/bulk", (req, res) => {
  res.json({ message: "all the course for the current instructure listed" });
});
export default adminRoute;
