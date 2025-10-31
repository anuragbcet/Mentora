import mongoose from 'mongoose';

const {Schema} = mongoose;
const ObjectId = mongoose.Types.ObjectId;


const userSchema =new  Schema({
    email:{type:String , unique : true},
    firstName:String,
    lastName:String,
    password:String
});

const adminSchema =new Schema({
    email:{type:String , unique : true},
    firstName:String,
    lastName:String,
    password:String
});

const courseSchema =new Schema({
    title:String,
    description:String,
    courseId:ObjectId,
    price:Number,
    imgUrl:String
});

const purchaseSchema =new Schema({
    userId:ObjectId,
    courseId:ObjectId
})


const userModel = mongoose.model("user",userSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase" ,purchaseSchema);
const adminModel = mongoose.model("admin",adminSchema);


export  {userModel,courseModel,purchaseModel,adminModel};