const express = require("express");
const morgan = require("morgan");
const postRoutes = require('./routes/posts');

const app = express();

app.use(morgan("dev"));

app.use("/", postRoutes);

const port=8080;
app.listen(8080, ()=>{console.log(`node app is listerning to ${port}`)});