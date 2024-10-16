"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Nome precisa ter entre 3 e 255 caracteres."
          }
        }
      },
      last_name: {
        type: _sequelize2.default.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Sobrenome precisar estar entre 3 e 255 caracteres."
          }
        }
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "Idade precisa ser um número interior"
          }
        }
      },
      weight: {
        type: _sequelize2.default.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Peso precisa ser um número real"
          }
        }
      },
      height: {
        type: _sequelize2.default.FLOAT,
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

  static associate(models) {
    this.hasMany(models.StudentPhoto, { foreignKey: "id_student" });
  }
} exports.default = Student;
