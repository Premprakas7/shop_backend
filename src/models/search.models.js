const mongoose=require("mongoose");

const searchSchema=new mongoose.Schema({
brands:{type:String, required:true},    
title:{type:String, required:true},
image:{type:String, required:true},
price:{type:String, required:true},
cat:{type:String,required:true} 
});

module.exports=mongoose.model("search", searchSchema);