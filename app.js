import dotenv from "dotenv";
dotenv.config();

import "./src/database/connection";

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";

class Application {
  constructor() {
    this.application = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.application.use(express.urlencoded({ extended: true }));
    this.application.use(express.json());
  }

  routes() {
    this.application.use("/", homeRoutes);
    this.application.use("/users", userRoutes);
  }
}

export default new Application().application;
