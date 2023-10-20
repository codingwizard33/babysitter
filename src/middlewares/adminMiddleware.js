import { userResource } from "../resources/userResource.js";
import { jwtVerificationService } from "../services/auth/jwtVerificationService.js";

const adminMiddleware = async (req, res, next) => {
  try {
    var token = req.header('Authorization').split(' ')[1];
  } catch (error) {
    return res.json({ message: 'Authentication failed.' });
  }

  try {
    const userId = await jwtVerificationService(token);

    const userRole = await userResource(userId.userId);

    if (userRole.role !== 'admin')
      return res.status(403).json({ message: 'You do not have permission to access this resource.'});

    next();
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export { adminMiddleware };