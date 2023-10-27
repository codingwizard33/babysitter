import express from "express";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { homeController } from "../controllers/homeController.js";
import { userProfileInformationController } from "../controllers/user/userProfileInformationController.js";
import { deleteAccountController } from "../controllers/user/deleteAccountController.js";

const router = express.Router();

router.get('/home', authMiddleware, homeController);
router.post('/user-profile-information-change', authMiddleware, userProfileInformationController);
router.delete('/delete-user-account', authMiddleware, deleteAccountController);

export default router;