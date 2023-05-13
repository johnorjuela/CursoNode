import express from "express";
const router = express.Router();

router.get("login",(res, req)=>{
    res.json({ok:login});
});

router.post("/register",(res, req)=>{
    res.json({ok:registrado});
});
export default router;