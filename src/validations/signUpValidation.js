import { Validator } from "node-input-validator";

const signUpValidation = async (req) => {
  const userData = new Validator(req, {
    fullName: 'required|string',
    email: 'required|email',
    password: 'required|same:password_confirmation',
    age: 'required|integer',
    avatar: 'string',
    address: 'required|string',
    location: 'required|object',
    role: 'required|string'
  });
  
  const matched = await userData.check();
  if (!matched)
    return userData.errors;

  return matched;
};

export { signUpValidation };