import { PServices } from "../services/products.service.js";

class ProductsController {
  getAll = async (req, res) => {
    try {
      const queryParams = req.query;

      const response = await PServices.getAll(queryParams);

      return res.json(response);
    } catch (error) {
      let data = {
        title: "Error inesperado",
        text: "intentelo otra vez",
      };
      return res.render("error", data);
    }
  };
}
export const productsController = new ProductsController();
