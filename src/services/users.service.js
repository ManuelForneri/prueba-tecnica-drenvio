import { usersModel } from "../models/users.models.js";

class usersServices {
  async getAll() {
    try {
      const users = await usersModel.find({}, {});
      return users;
    } catch (error) {
      throw error;
    }
  }
}
export const UServices = new usersServices();
