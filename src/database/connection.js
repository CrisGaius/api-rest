import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Student from "../models/Student";
import User from "../models/User";
import StudentPhoto from "../models/StudentPhoto";

const models = [Student, User, StudentPhoto];

const connection = new Sequelize(databaseConfig);

for (let model of models) {
  model.init(connection);
}

let i = 0;
while (i < models.length) {
  models[i].associate?.(connection.models);
  i++;
}
