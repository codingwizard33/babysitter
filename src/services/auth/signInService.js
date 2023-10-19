import { userResource } from "../../resources/userResource.js";
import { confirmPasswordService } from "./confirmPasswordService.js";
import { jwtSignService } from "./jwtSignService.js";

const signInService = async (req) => {
  const confirmed = await confirmPasswordService(req.body);
  if (confirmed == false)
    return {
      message: 'These credentials do not match our records.'
    };

  const user = await userResource(req.body.email);

  const token = await jwtSignService(user);

  user.token = token;

  return {
    message: user
  };
};

export { signInService };