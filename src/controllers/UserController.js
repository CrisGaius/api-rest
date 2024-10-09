import User from "../models/User";
class UserController {
  // Index
  async index(request, response) {
    try {
      const users = await User.findAll();
      return response.json({
        users
      });
    } catch (e) {
      return response.json("Não foi possível encontrar os usuários.");
    }
  }

  async storeUser(request, response) {
    try {
      const newUser = await User.create(request.body);
      return response.json({
        newUser
      });
    } catch (e) {
      return response.status(400).json(
        {
          errors: e.errors.map((err => err.message))
        }
      );
    }
  }

  // Show
}

export default new UserController();
