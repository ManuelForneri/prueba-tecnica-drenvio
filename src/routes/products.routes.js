import Router from "express";
import { productsController } from "../controllers/products.controller.js";

export const productsRouter = Router();

productsRouter.get("/", productsController.getAll);
productsRouter.get(
  "/price/:user_id/:nombre_producto",
  productsController.getPrice
);
