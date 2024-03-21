import mongoose from "mongoose";

const { Schema } = mongoose;

const list = new Schema({
  id: Number,
  name: String,
},{ timestamps: true });

const listModel = mongoose.model("list", list);

export default listModel
