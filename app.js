const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("hello world");
});

const port=8080;
app.listen(8080, ()=>{console.log(`node app is listerning to ${port}`)});