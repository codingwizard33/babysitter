import { passwordResetService } from "../../services/auth/passwordResetService.js";

const passwordResetController = async (req, res) => {
  const response = await passwordResetService(req);

  return res.json(response);
};

export { passwordResetController };