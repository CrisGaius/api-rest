import Sequelize, { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Campo [NOME] deve ter entre 3 e 255 caracteres"
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
      },
    }, {
      sequelize
    });
    return this;
  }
}
