import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  color: { type: String, required: true },
  stock: { type: Number, required: true },
  precio: { type: Number, required: true },
});

export const productsModel = model("products", productsSchema);
