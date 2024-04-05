import { connect } from "mongoose";
import env from "../config/enviroment.config.js";

export async function connectMongo() {
  try {
    await connect(env.mongoUrl, {
      dbName: env.dbName,
    });
    console.log("DB Conection✅");
  } catch (e) {
    console.log(e);
    throw "can not connect to the db 🆘";
  }
}
