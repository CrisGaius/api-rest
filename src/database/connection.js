import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Student from "../models/Student";

const models = [Student];

const connection = new Sequelize(databaseConfig);

for (let model of models) {
  model.init(connection);
}
