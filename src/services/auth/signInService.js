import { userResource } from "../../resources/userResource.js";
import { comparePasswordService } from "./comparePasswordService.js";
import { jwtSignService } from "./jwtSignService.js";

const signInService = async (req) => {
  const confirmed = await comparePasswordService(req.body);
  if (confirmed === false)
    return {
      message: 'These credentials do not match our records.'
    };

  const user = await userResource(confirmed);

  const token = await jwtSignService(user);

  user.token = token;

  return {
    message: user
  };
};

export { signInService };