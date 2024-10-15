import { Router } from "express";

import loginRequired from "../middlewares/loginRequired";

import studentPhotoController from "../controllers/StudentPhotoController";

const router = new Router();

router.post("/", loginRequired, studentPhotoController.store);

export default router;
