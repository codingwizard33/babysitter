import { ForgotPassword } from "../../emails/ForgotPassword.js";
import User from "../../models/User.js";
import { jwtSignService } from "./jwtSignService.js";

const forgotPasswordService = async (req) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });
  if (!user)
    return {
      message: 'Email address was not found.'
    };

  const token = await jwtSignService(user);

  try {
    const sendEmail = new ForgotPassword(user, token);
    await sendEmail.sendEmail();

    return {
      message: `Password reset link was sent to your ${user.email} email address.`
    };
  } catch (error) {
    return error.message;
  }
};

export { forgotPasswordService };