import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
});

export const productsModel = model("products", productsSchema);
