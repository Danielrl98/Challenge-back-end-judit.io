import mongoose from "mongoose";

require('dotenv').config()

try {
  
  mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connect db success")
  })

} catch (error) {
    throw new Error("1: connect db error");
}
