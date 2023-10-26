import User from "../../models/User.js";
import { jwtVerificationService } from "../../services/auth/jwtVerificationService.js";
import { passwordUpdateService } from "./passwordUpdateService.js";

const passwordResetService = async (req) => {
  try {
    var { userId } = await jwtVerificationService(req.params.token); 
  } catch (error) {
    return error.message;
  }

  try {
    const { password, password_confirmation } = req.body;
    
    if (password === password_confirmation) {
      await passwordUpdateService(userId, req.body);

      return {
        message: 'Password successfully changed.'
      };
    }
  
    return {
      message: 'The password and password_confirmation must match.'
    };
  } catch (error) {
    return error.message;
  }
};

export { passwordResetService };