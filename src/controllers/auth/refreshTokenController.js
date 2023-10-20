import { refreshTokenService } from "../../services/auth/refreshTokenService.js";

const refreshTokenController = async (req, res) => {
  const response = await refreshTokenService(req.header('Authorization'));

  return res.json(response);
};

export { refreshTokenController };