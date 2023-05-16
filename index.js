import 'dotenv/config';
import "./database/connectdb.js";
import express from 'express';
import authrouter from "./routes/authroutes.js";

const app = express();
app.use("/api/v1", authrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log("On fire http://localhost:"+PORT));