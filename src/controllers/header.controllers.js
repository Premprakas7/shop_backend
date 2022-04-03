
const express=require("express");
const uploads = require("../middleware/uploads");

const Header=require("../models/header.models");

const router=express.Router();

router.get("", async(req,res)=>{
try{
    const header=await Header.find().lean().exec();
    return res.status(200).send(header); 

}catch(err){
    return res.status(500).send(err);
}
});

router.post("", uploads.single("image"), async (req, res) => {
    try {
     
      const header = await Header.create({
        title: req.body.title,
        image: req.body.image,
        
      });
      return res.status(200).send(header);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.delete("/:id", async(req,res)=>{
    try {
      const header = await Header.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(header);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


module.exports=router;