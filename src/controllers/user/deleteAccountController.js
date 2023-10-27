import { deleteAccountService } from "../../services/user/deleteAccountService.js";

const deleteAccountController = async (req, res) => {
  const response = await deleteAccountService(req);

  return res.json(response);
};

export { deleteAccountController };