import { signUpService } from "../../services/auth/signUpService.js";

const signUpController = async (req, res) => {
  const response = await signUpService(req);

  return res.json(response);
};

export { signUpController };