import User from "../models/User";
class UserController {
  // Index
  async index(request, response) {
    try {
      const users = await User.findAll({ attributes: ["id", "name", "email"] });
      return response.json({
        users
      });
    } catch (e) {
      return response.json("Não foi possível encontrar os usuários.");
    }
  }

  // store
  async storeUser(request, response) {
    try {
      const newUser = await User.create(request.body);
      const { id, name, email } = newUser;
      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json(
        {
          errors: e.errors.map((err => err.message))
        }
      );
    }
  }

  //show
  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);
      const { id, name, email } = user;
      return response.json({ id, name, email });
    } catch (e) {
      return response.json("Não foi possível encontrar o usuário.");
    }
  }

  //update
  async update(request, response) {
    try {
      const user = await User.findByPk(request.userId);

      if (!user) return response.status(400).json({ errors: ["Usuário não existe."] });

      const newData = await user.update(request.body);
      const { id, name, email } = newData;
      return response.json({ id, name, email });
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  //delete
  async delete(request, response) {
    try {
      const user = await User.findByPk(request.userId);

      if (!user) return response.status(400).json({ errors: ["Usuário não existe."] });

      await user.destroy();
      return response.json(`${request.userId} excluído com sucesso.`);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

}

export default new UserController();
