import express from "express";

import { _404Controller } from "../controllers/_404Controller.js";

const router = express.Router();

router.get('*', _404Controller);

export default router;