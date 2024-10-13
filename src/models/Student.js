import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Nome precisa ter entre 3 e 255 caracteres."
          }
        }
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Sobrenome precisar estar entre 3 e 255 caracteres."
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        unique: {
          msg: "Email já existente."
        },
        validate: {
          isEmail: {
            msg: "Email inválido"
          }
        }
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "Idade precisa ser um número interior"
          }
        }
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Peso precisa ser um número real"
          }
        }
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Altura precisa ser um número real"
          }
        }
      },
    }, {
      sequelize
    });
    return this;
  }
}
