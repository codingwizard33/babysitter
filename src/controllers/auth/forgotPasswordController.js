import { forgotPasswordService } from "../../services/auth/forgotPasswordService.js";

const forgotPasswordController = async (req, res) => {
  const response = await forgotPasswordService(req);

  return res.json(response);
};

export { forgotPasswordController };