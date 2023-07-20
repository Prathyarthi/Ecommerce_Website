const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { default: connectDB } = require("./config/db");

// Configure ENV
dotenv.config();
// dotenv.config({path: }) use this if the .env file is in another folder

//DB config 
connectDB();

// rest object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

// rest API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce Website</h1>");
});

// PORT
PORT = process.env.PORT || 8080;

// Run Listen
app.listen(PORT, () => {
  console.log(
    `Server is Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});