import User from "../../models/User.js";
import { comparePasswordService } from "../auth/comparePasswordService.js";

const deleteAccountService = async (req) => {

  const confirmation = await comparePasswordService(req.body);

  if (confirmation === false)
    return {
      message: 'Wrong password.'
    };

  await User.deleteOne({ email: req.body.email });

  return {
    message: 'Your account was deleted successfully.'
  };
};

export { deleteAccountService };