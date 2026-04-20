import express from "express";
const router=express.Router();
router.get("/test1",(req,res)=>{
    console.log("Router works !");
    res.send("Router Working !")
});
router.post("/test",(req,res)=>{
    console.log("Router works!");
});
router.put("/test",(req,res)=>{
    console.log("router works");
});
router.delete("/test",(req,res)=>{
    console.log("router works");
});
export default router;