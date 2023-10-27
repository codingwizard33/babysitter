import User from "../../models/User.js";
import { jwtVerificationService } from "../auth/jwtVerificationService.js";

const userProfileInformationService = async (req) => {
  const { userId } = await jwtVerificationService(req.header('Authorization').split(' ')[1]);

  const userKeys = Object.keys(req.body);

  for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i];

    try {
      await User.updateOne({ _id: userId }, { $set: { [key]: req.body[key] } });
    } catch (error) {
      return error.message;
    }
  }

  return {
    message: 'Profile information was updated.'
  };
};

export { userProfileInformationService };