import dotenv from "dotenv";
dotenv.config();

import "./src/database/connection";

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import studentRoutes from "./src/routes/studentRoutes";
import photoRoutes from "./src/routes/photoRoutes";

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
    this.application.use("/tokens", tokenRoutes);
    this.application.use("/students", studentRoutes);
    this.application.use("/photos", photoRoutes);
  }
}

export default new Application().application;
