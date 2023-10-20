import { jwtVerificationService } from "../services/auth/jwtVerificationService.js";

const authMiddleware = async (req, res, next) => {
  try {
    var token = req.header('Authorization').split(' ')[1]; 
  } catch (error) {
    return res.json({ message: 'Authentication failed.' });
  }

  try {
    await jwtVerificationService(token);

    next();
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export { authMiddleware };