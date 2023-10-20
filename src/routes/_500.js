import express from "express";

import { _500Controller } from "../controllers/_500Controller.js";

const router = express.Router();

router.post('*', _500Controller);

export default router;