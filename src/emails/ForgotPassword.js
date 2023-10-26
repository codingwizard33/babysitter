import { emailSendService } from "../services/emailSendService.js";

class ForgotPassword
{
  constructor (data, token) {
    this.email = data.email;
    this.content = `
      <div style="text-align: center;">
        <h3>Dear ${data.fullName},</h3>
          
        <h3>For reset your account password, please click on the button below:</h3>

        <a style="width: 115px; height: 25px; background: #4E9CAF; padding: 10px; text-align: center; border-radius: 5px; color: white; font-weight: bold; line-height: 45px; text-decoration: none;" href="http://localhost:3000/auth/password-reset/${token}">Reset password</a>
      </div>
    `;
  }

  async sendEmail () {
    const data = {
      email: this.email,
      content: this.content
    };

    const response = await emailSendService(data);
    return response;
  }
}

export { ForgotPassword };