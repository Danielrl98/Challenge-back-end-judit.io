import mongoose from "mongoose";

require('dotenv').config()

try {
  
  mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("banco de dados conectado")
  })

} catch (error) {
    throw new Error("Erro ao conectar ao banco de dados");
}
