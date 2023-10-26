import express from "express";

import { signInController } from "../controllers/auth/signInController.js";
import { signUpController } from "../controllers/auth/signUpController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { logOutController } from "../controllers/auth/logOutController.js";
import { refreshTokenController } from "../controllers/auth/refreshTokenController.js";
import { emailVerificationController } from "../controllers/auth/emailVerificationController.js";

const router = express.Router();

router.post('/sign-in', signInController);
router.post('/sign-up', signUpController);
router.post('/log-out', authMiddleware, logOutController);
router.post('/refresh-token', authMiddleware, refreshTokenController);
router.get('/email-verification/:token', emailVerificationController);

export default router;