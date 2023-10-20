import { jwtSignService } from "./jwtSignService.js";
import { jwtVerificationService } from "./jwtVerificationService.js";

const refreshTokenService = async (req) => {
  const verify = await jwtVerificationService(req.split(' ')[1]);

  verify._id = verify.userId;

  const token = await jwtSignService(verify);

  return { message: token };
};

export { refreshTokenService };