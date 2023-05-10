import express from 'express';
const app = express();

app.get("/", (req, res)=> {
    console.log("Wiii");
    res.json({ok:true});
});

app.listen(5000,()=> console.log("On fire http://localhost:5000"));