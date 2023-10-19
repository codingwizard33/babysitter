import { signInService } from "../../services/auth/signInService.js";

const signInController = async (req, res) => {
  const response = await signInService(req);

  return res.json(response);
};

export { signInController };