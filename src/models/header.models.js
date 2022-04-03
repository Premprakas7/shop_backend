const mongoose=require("mongoose");

const headerSchema=new mongoose.Schema({
title:{type:String, required:false},    
image:{type:String, required:false},

});

module.exports=mongoose.model("header", headerSchema);

// store:{type:String, required:true},    
// storeimg:{type:String, required:true},
// cont:{type:String, required:false},
// contimg:{type:String, required:false},
// logo:{type:String, required:false},
// wlogo:{type:String, required:false},
// blogo:{type:String, required:false},
// signlogo:{type:String, required:false},
// cat1:{type:String, required:false},    
// cat2:{type:String, required:false},
// cat3:{type:String, required:false},
// cat4:{type:String, required:false},
// cat5:{type:String, required:false},
// cat6:{type:String, required:false},
// cat7:{type:String, required:false},
// cat8:{type:String, required:false},
// cat9:{type:String, required:false},