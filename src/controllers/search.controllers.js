
const express=require("express");
const uploads = require("../middleware/uploads");

const Search=require("../models/search.models");

const router=express.Router();

router.get("", async(req,res)=>{
try{
    const search=await Search.find().lean().exec();
    return res.status(200).send(search); 

}catch(err){
    return res.status(500).send(err);
}
});

router.post("", uploads.single("image"), async (req, res) => {
    try {
     
      const search = await Search.create({
        brands: req.body.brands,
        title: req.body.title,
        image: req.file.path,
        price:req.body.price,
        cat:req.body.cat
      });
      return res.status(200).send(search);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });



module.exports=router;