import dotenv from "dotenv";
dotenv.config();

import "./database/connection";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { resolve } from "path";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import studentRoutes from "./routes/studentRoutes";
import studentPhotoRoutes from "./routes/studentPhotoRoutes";

const whiteList = [
  "http://34.95.206.56:81",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, cb) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed by CORS"));
    }
  }
};

class Application {
  constructor() {
    this.application = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.application.use(cors(corsOptions));
    this.application.use(helmet());
    this.application.use(express.urlencoded({ extended: true }));
    this.application.use(express.json());
    this.application.use("/images", express.static(resolve(__dirname, "..", "uploads", "images")));
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
