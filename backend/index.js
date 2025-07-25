require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require('./routes/api')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api', apiRoutes)

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})