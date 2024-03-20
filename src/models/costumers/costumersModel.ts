import mongoose from "mongoose";

const { Schema } = mongoose;

const Costumers = new Schema({
  cpf: String,
  list: String,
});
const CostumersModel = mongoose.model("costumers", Costumers);

export default CostumersModel
