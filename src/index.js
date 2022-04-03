const express=require("express");

const searchController=require("./controllers/search.controllers");
const headerController=require("./controllers/header.controllers");


const app=express();

app.use("/search" ,searchController);
app.use("/header" ,headerController);

module.exports=app;