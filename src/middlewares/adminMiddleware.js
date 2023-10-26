import { EmailVerification } from "../emails/EmailVerification.js";
import { userResource } from "../resources/userResource.js";
import { jwtVerificationService } from "../services/auth/jwtVerificationService.js";

const adminMiddleware = async (req, res, next) => {
  try {
    var token = req.header('Authorization').split(' ')[1]; 
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed.' });
  }

  try {
    const { userId } = await jwtVerificationService(token);
    const user = await userResource(userId);

    if (user.role !== 'admin')
      return res.status(403).json({ message: 'You do not have permission to access this resource.'});

    if (!user.verifiedAt) {
      const sendEmail = new EmailVerification(user, token);

      try {
        await sendEmail.sendEmail();

        return res.json({ message: `Email verification message was sent to your ${user.email} address.` });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export { adminMiddleware };