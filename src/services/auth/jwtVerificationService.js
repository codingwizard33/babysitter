import jwt from "jsonwebtoken";

const jwtVerificationService = async (req) => {
  const user = jwt.verify(req, process.env.JWT_SECRET);

  return user;
};

export { jwtVerificationService };