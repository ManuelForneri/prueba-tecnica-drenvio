import { PServices } from "../services/products.service.js";

class ProductsController {
  getAll = async (req, res) => {
    try {
      const products = await PServices.getAll();
      return res.json({
        status: "success",
        msg: "Products Listing",
        payload: products,
      });
    } catch (error) {
      return res.json({
        status: "error",
        msg: "something went wrong :(",
        payload: {},
      });
    }
  };
  getPrice = async (req, res) => {
    try {
      const { user_id, nombre_producto } = req.params;
      const products = await PServices.getPrice(user_id, nombre_producto);
      return res.json({
        status: "success",
        msg: "Products Listing",
        payload: products,
      });
    } catch (error) {
      return res.json({
        status: "error",
        msg: "something went wrong :(",
        payload: {},
      });
    }
  };
}
export const productsController = new ProductsController();
