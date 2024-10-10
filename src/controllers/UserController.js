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

  // store
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

  //show
  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);
      return response.json(user);
    } catch (e) {
      return response.json("Não foi possível encontrar o usuário.");
    }
  }

  //update
  async update(request, response) {
    try {
      if (!request.params.id) return response.status(400).json({ errors: ["ID não foi enviado."] });

      const user = await User.findByPk(request.params.id);

      if (!user) return response.status(400).json({ errors: ["Usuário não existe."] });

      const newData = await user.update(request.body);
      return response.json(newData);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  //delete
  async delete(request, response) {
    try {
      if (!request.params.id) return response.status(400).json({ errors: ["ID não foi enviado."] });

      const user = await User.findByPk(request.params.id);

      if (!user) return response.status(400).json({ errors: ["Usuário não existe."] });

      await user.destroy();
      return response.json(`${request.params.id} excluído com sucesso.`);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

}

export default new UserController();
