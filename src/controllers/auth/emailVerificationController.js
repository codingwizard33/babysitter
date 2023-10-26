import { emailVerificationService } from "../../services/auth/emailVerificationService.js";

const emailVerificationController = async (req, res) => {
  const response = await emailVerificationService(req.params.token);

  return res.send(response);
};

export { emailVerificationController };