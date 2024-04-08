import { PServices } from "../services/products.service.js";

class ProductsController {
  getAll = async (req, res) => {
    //No se ocupa el req
    try {
      const products = await PServices.getAll();
      return res.status(200).json({
        status: "success",
        msg: "Products Listing",
        payload: products,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", msg: "Internal Server Error" });
    }
  };
  getPrice = async (req, res) => {
    try {
      const { user_id, product_name } = req.params;
      const response = await PServices.getPrice({ user_id, product_name });
      return res.status(200).json({
        status: "success",
        msg: "Products Listing",
        payload: response,
      });
    } catch (error) {
      return res.status(400).json({ status: "error", msg: error.message });
    }
  };
}
export const productsController = new ProductsController();
