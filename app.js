import express from "express";
import homeRoutes from "./src/routes/homeRoutes";

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
  }
}

export default new Application().application;
