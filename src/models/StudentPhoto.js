import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

export default class StudentPhoto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Campo originalname não pode ser vazio."
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Campo filename não pode ser vazio."
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue("filename")}`;
        }
      },
    }, {
      sequelize,
      tableName: "students_photos"
    });
    return this;
  }


  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "id_student" });
  }
}
