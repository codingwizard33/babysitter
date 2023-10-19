import express from "express";

import { signInController } from "../controllers/auth/signInController.js";

const router = express.Router();

router.post('/sign-in', signInController);

export default router;