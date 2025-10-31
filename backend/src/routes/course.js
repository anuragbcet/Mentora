import express from 'express';
const courseRouter=express.Router();

courseRouter.get('/bulk',(req,res)=>{
    res.json({message:"all the course listed here"});
})

courseRouter.get('/purchased',(req,res)=>{
    res.json({message:"Only the purchased course is here"});
});

export default courseRouter;