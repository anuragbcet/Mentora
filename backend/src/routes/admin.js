import express from "express";
import { adminModel, courseModel } from "../db.js";
import jwt from "jsonwebtoken";
import adminMiddleware from "../middleware/admin.js";

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

adminRoute.post("/course",adminMiddleware, async (req, res) => {

    const adminId = req.userId;
    const {title,description,price,imgUrl} = req.body;
    
    const course=await courseModel.create({
        title:title,
        description:description,
        price:price,
        imgUrl:imgUrl,
        creatorId:adminId
    })

    res.json({
        message:"course created",
        courseId:course._id
    })
});

adminRoute.put('/course',adminMiddleware, async (req,res)=>{
    const adminId =req.userId;
     const {title,description,price,imgUrl,courseId} = req.body;

    const course =await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        price:price,
        imgUrl:imgUrl

    })

   res.json({
    message:"course updated",
    courseId:course._id
   })

})

adminRoute.get("/course/bulk", (req, res) => {
    const adminId=req.userId;

    const course = courseModel.find({
        creatorId:adminId
    });

    res.status(201).json(course);
  
});
export default adminRoute;
