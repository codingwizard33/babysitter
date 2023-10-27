import { comparePasswordService } from "../auth/comparePasswordService.js";
import { jwtVerificationService } from "../auth/jwtVerificationService.js";
import { passwordUpdateService as passwordUpdate } from "../auth/passwordUpdateService.js";

const passwordUpdateService = async (req) => {
  const { password, password_confirmation } = req.body;

  if (password !== password_confirmation)
    return {
      message: 'The password and password_confirmation must match.'
    };
    
  const userData = {
    email: req.body.email,
    password: req.body.currnet_password
  };

  const response = await comparePasswordService(userData);

  if (response === false)
    return {
      message: 'Wrong password.'
    };

  const { userId } = await jwtVerificationService(req.header('Authorization').split(' ')[1]);

  await passwordUpdate(userId, { password: password });

  return {
    message: 'The user password chenged successfully.'
  };
};

export { passwordUpdateService };