import { signUpValidation } from "../../validations/signUpValidation.js";
import { createUserService } from "./createUserService.js";
import { signInService } from "./signInService.js";

const signUpService = async (req) => {
  const validate = await signUpValidation(req.body);

  if (validate === true) {
    const newUser = await createUserService(req.body);
    if (newUser === 'Email address already exist.') {
      return {
        email: {
          message: 'Email address already exist.',
          rule: 'exist'
        }
      };
    }

    const data = {
      body: {
        email: req.body.email,
        password: req.body.password
      }
    };

    const user = await signInService(data);

    return user;
  }

  return validate;
};

export { signUpService };