import { userProfileInformationService } from "../../services/user/userProfileInformationService.js";

const userProfileInformationController = async (req, res) => {
  const response = await userProfileInformationService(req);

  return res.json(response);
};

export { userProfileInformationController };