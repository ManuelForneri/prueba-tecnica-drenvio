import { productsModel } from "../models/products.models.js";
import { usersModel } from "../models/users.models.js";

class productServices {
  async getAll() {
    try {
      const products = await productsModel.find({ stock: { $gt: 0 } }, {});
      return products;
    } catch (error) {
      throw error;
    }
  }
  async getPrice({ user_id, product_name }) {
    try {
      const user = await usersModel.findById(user_id);
      if (!user) {
        throw new Error("User not found, Review the data");
      }
      const product = await productsModel.findOne({ model: product_name });
      if (!product) {
        throw new Error("Product not found, Review the data");
      }

      const premiumBrands = user.premium_brands.includes(product.brand);

      if (premiumBrands) {
        let discount = product.price * 0.8;
        const product_discount = {
          ...product.toObject(),
          price: discount,
        };
        return product_discount;
      } else {
        return product;
      }
    } catch (error) {
      throw error;
    }
  }
}
export const PServices = new productServices();
