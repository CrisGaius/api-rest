import dotenv from "dotenv";
dotenv.config();

import "./src/database/connection";

import express from "express";
import { resolve } from "path";

import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import studentRoutes from "./src/routes/studentRoutes";
import studentPhotoRoutes from "./src/routes/studentPhotoRoutes";

class Application {
  constructor() {
    this.application = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.application.use(express.urlencoded({ extended: true }));
    this.application.use(express.json());
    this.application.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.application.use("/", homeRoutes);
    this.application.use("/users", userRoutes);
    this.application.use("/tokens", tokenRoutes);
    this.application.use("/students", studentRoutes);
    this.application.use("/photos", studentPhotoRoutes);
  }
}

export default new Application().application;
