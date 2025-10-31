import express from 'express';

const adminRoute = express.Router();

adminRoute.post('/signup',(req,res)=>{
    res.send("Admin signup route done");
})

adminRoute.post('/signin',(req,res)=>{
    res.json({message:"sigin route"});
})

adminRoute.put('/course',(req,res)=>{
    res.json({message:"Route to add the new course"});
})

adminRoute.get('/course/bulk',(req,res)=>{
    res.json({message:"all the course for the current instructure listed"});
})
export default adminRoute;