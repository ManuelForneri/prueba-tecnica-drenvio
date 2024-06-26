import Router from "express";
import { productsController } from "../controllers/products.controller.js";

export const productsRouter = Router();

productsRouter.get("/products", productsController.getAll);
productsRouter.get(
  "/price/:user_id/:product_name",
  productsController.getPrice
);
