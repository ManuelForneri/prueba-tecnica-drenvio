import { productsModel } from "../models/products.models.js";

class productServices {
  async getAll() {
    try {
      const products = await productsModel.find({ stock: { $gt: 0 } }, {});
      return products;
    } catch (error) {
      throw error;
    }
  }
  async getPrice() {
    try {
    } catch (error) {}
  }
}
export const PServices = new productServices();
