import sendMail from "./sendMail.js";

const sendVerificationEmail = async ({ user, origin }) => {
  const { email, name, verificationToken } = user;
  console.log(email);
  const verifyEmailLink = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<div><h4>Hi ${name},</h4><br><p>Please click the button below to verify your account, <br>Regards, <br>The Jobify Team</p><br><br><button><a href=${verifyEmailLink}>Verify Email</a></button></div>`;

  return sendMail({ to: email, subject: "Email Verification", html: message });
};

export default sendVerificationEmail;
