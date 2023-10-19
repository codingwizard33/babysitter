import express from "express";

import { signInController } from "../controllers/auth/signInController.js";
import { signUpController } from "../controllers/auth/signUpController.js";

const router = express.Router();

router.post('/sign-in', signInController);
router.post('/sign-up', signUpController);

export default router;