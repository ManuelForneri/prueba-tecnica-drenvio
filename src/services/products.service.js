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
  async getPrice({ user_id, nombre_producto }) {
    try {
      const user = await usersModel.findById(user_id);
      if (!user) {
        throw new Error("Usuario no encontrado, revise los datos");
      }
      const product = await productsModel.findOne({ modelo: nombre_producto });
      if (!product) {
        throw new Error("Producto no encontrado, revise los datos");
      }

      const marcaPremium = user.marcas_premium.includes(product.marca);

      if (marcaPremium) {
        let descuento = product.precio * 0.8;
        const producto_descuento = {
          ...product.toObject(),
          precio: descuento,
        };
        return producto_descuento;
      } else {
        return product;
      }
    } catch (error) {
      throw error;
    }
  }
}
export const PServices = new productServices();
