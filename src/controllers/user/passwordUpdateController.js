import { passwordUpdateService } from "../../services/user/passwordUpdateService.js";

const passwordUpdateController = async (req, res) => {
  const response = await passwordUpdateService(req);

  return res.json(response);
};

export { passwordUpdateController };