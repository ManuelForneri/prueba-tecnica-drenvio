import express from "express";
import { __dirname } from "./config.js";
import { connectMongo } from "./utils/dbConnection.js";
import env from "./config/enviroment.config.js";
import { productsRouter } from "./routes/products.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const app = express();
const PORT = env.port;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectMongo();

app.use("/", productsRouter);
app.use("/users", usersRouter);
app.use("/", (req, res) => {
  res.send("Home");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
