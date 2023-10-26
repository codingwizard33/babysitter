import express from "express";

import { indexController } from "../controllers/indexController.js";
import { emailVerificationController } from "../controllers/auth/emailVerificationController.js";

const router = express.Router();

router.get('/', indexController);
router.get('/auth/email-verification/:token', emailVerificationController);

export default router;