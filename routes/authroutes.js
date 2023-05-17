import express from "express";
import { login, registrado } from "../controllers/authcontrollers.js";
const router = express.Router();

router.get("/login",login);

router.post("/register",registrado);

export default router;