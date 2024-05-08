//import express
const { Router }=require('express');
const router=Router();

router.get("",async(req,res)=>{
  res.send({message:'welcome to online food ordering websites'});
})

module.exports=router;