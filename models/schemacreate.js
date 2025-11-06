const mongoose=require("mongoose");

const signupSchema=new mongoose.Schema({
    uname:String,
    lname:String,
    email:String,
    pnum:Number,
    pass:String
})

const signupModel=mongoose.model("signup",signupSchema)
module.exports=signupModel