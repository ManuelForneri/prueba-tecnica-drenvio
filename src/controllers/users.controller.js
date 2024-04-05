import { UServices } from "../services/users.service.js";

class UsersController {
  getAll = async (req, res) => {
    try {
      const users = await UServices.getAll();
      return res.json({
        status: "success",
        msg: "Users Listing",
        payload: users,
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
export const usersController = new UsersController();
