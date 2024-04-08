import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  premium_brands: { type: [String], required: true },
});

export const usersModel = model("users", userSchema);
