import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log(`Connected to our database`);
  })
  .catch(err => console.error(err));

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!!`);
})
