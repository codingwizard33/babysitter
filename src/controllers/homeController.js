import { userResource } from "../resources/userResource.js";
import { jwtVerificationService } from "../services/auth/jwtVerificationService.js";

const homeController = async (req, res) => {
  const response = await jwtVerificationService(req.header('Authorization').split(' ')[1]);

  const user = await userResource(response.userId);

  return res.json(user);
};

export { homeController };