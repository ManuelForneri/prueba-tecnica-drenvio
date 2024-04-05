import { Schema, model } from "mongoose";

const userSchema = new Schema({
  Nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  marcas_premium: { type: [String], required: true },
});

export const usersModel = model("users", userSchema);
