import 'dotenv/config';
import "./database/connectdb.js";
import express from 'express';
const app = express();

app.get("/", (req, res)=> {
    console.log("Wiii");
    res.json({ok:true});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log("On fire http://localhost:"+PORT));