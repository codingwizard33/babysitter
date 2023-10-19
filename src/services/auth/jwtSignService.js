import jwt from "jsonwebtoken";

const jwtSignService = async (req) => {
  const token = jwt.sign({ user: req }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

export { jwtSignService };