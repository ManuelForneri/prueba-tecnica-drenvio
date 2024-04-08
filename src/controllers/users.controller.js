import { UServices } from "../services/users.service.js";

class UsersController {
  getAll = async (req, res) => {
    //No se ocupa el req
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
        msg: "Internal Error server",
        payload: {},
      });
    }
  };
}
export const usersController = new UsersController();
