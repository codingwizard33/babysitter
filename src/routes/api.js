import express from "express";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { homeController } from "../controllers/homeController.js";

const router = express.Router();

router.get('/home', authMiddleware, homeController);

export default router;