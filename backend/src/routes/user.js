import express from 'express';
const userRouter = express.Router();
import {userModel,courseModel,adminModel,purchaseModel} from '../db.js'

userRouter.post('/signup',async (req,res)=>{

  try {
    const { email, firstName, lastName , password } = req.body;
    // Create a new instance of the User model
    const newUser = new userModel({
        email,
        firstName,
        lastName,
        password
    });

    // Save the new User to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the newly created USer
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle validation or other errors
  }
});


userRouter.post('/signin',(req,res)=>{
    res.json({message:"User log in successfull"});
})

userRouter.put('/purchase',(req,res)=>{
    res.json({message:"course is purchased"})
})

export default userRouter;