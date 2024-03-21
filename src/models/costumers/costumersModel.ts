import mongoose from "mongoose";

const { Schema } = mongoose;

const Costumers = new Schema({
  name: String,
  cpf: String,
  list: Number,
},{ timestamps: true });
const CostumersModel = mongoose.model("costumers", Costumers);

export default CostumersModel
