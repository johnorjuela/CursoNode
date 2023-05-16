import express from "express";
const router = express.Router();

router.get("/login",(req, res)=>{
    res.json({ok:"login",item:"perfecto"});
});

router.post("/register",(req, res)=>{
    res.json({ok:"registrado"});
});
export default router;