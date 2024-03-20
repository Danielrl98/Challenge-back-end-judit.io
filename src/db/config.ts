import mongoose from "mongoose";

require('dotenv').config()

const database:string | undefined = process.env.DATABASE_URL

mongoose.connect(database)
  .then(() => {
    console.log("banco de dados conectado")
  })
  .catch((e) => {
    throw new Error("Erro ao conectar ao banco de dados");
});
