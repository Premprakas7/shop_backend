const mongoose=require("mongoose");

const connect=async ()=>{
    return mongoose.connect("mongodb+srv://prem:prem@cluster0.fkthv.mongodb.net/test");
}

module.exports=connect;