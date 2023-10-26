import User from "../../models/User.js";
import { jwtVerificationService } from "./jwtVerificationService.js";

const emailVerificationService = async (req) => {
  const { userId } = await jwtVerificationService(req);

  try {
    await User.updateOne({ _id: userId }, { $set: { verifiedAt: Date.now() } });
    
    return {
      message: 'Email verifiyed successfully.'
    };
  } catch (error) {
    console.error(error.message);

    return error.message;
  }
};

export { emailVerificationService };