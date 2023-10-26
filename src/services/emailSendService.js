import transporter from "../config/mailer.js";

const emailSendService = async (data) => {
  const emailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: data.email,
    subject: `Babysitter`,
    html: data.content
  };

  return transporter.sendMail(emailOptions);
};

export { emailSendService };