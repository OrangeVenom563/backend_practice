const express = require("express");
const morgan = require("morgan");
const postRoutes = require('./routes/posts');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}).then(()=> console.log("DB Connected"));
mongoose.connection.on("error",err=>{console.log(`DB connection error: ${err.message}`)});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", postRoutes);
app.use(expressValidator());

const port= process.env.PORT||8080;
app.listen(8080, ()=>{console.log(`node app is listerning to ${port}`)});