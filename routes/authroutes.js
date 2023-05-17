import express from "express";
import { login, registrado } from "../controllers/authcontrollers.js";
import {body} from "express-validator";
const router = express.Router();

router.get("/login",login);

router.post("/register",[
 body
    ("email","Esto no es un Email").isEmail()
 
],registrado);

export default router;