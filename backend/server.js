import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import mongoose from 'mongoose'
import { postRoute } from './routes/postRoute.js';

const app = express()


const PORT = process.env.PORT || 4001;
const MongoDB_URI = process.env.MONGODB_URI

//Connecting to mongoDB
try {
  await mongoose.connect(MongoDB_URI);
  console.log("Connected to mongoose");

} catch (error) {
    console.log("error: ", error);
}

//use routes
app.use("/", postRoute)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})