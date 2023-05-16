import sendMail from "./sendMail.js";

const sendResetPasswordEmail = async ({
  email,
  passwordToken,
  origin,
  name,
}) => {
  const resetPasswordLink = `${origin}/user/reset-password?token=${passwordToken}&email=${email}`;
  const message = `<div><h4>Hi ${name},</h4><br><p>Please click the button below to reset your password, <br>Regards, <br>The Jobify Team</p><br><br><button><a href=${resetPasswordLink}>Reset Password</a></button></div>`;

  return sendMail({ to: email, subject: "Reset Password", html: message });
};

export default sendResetPasswordEmail;
