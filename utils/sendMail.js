import nodemailer from "nodemailer";
import nodeMailerConfig from "./nodeMailerConfig.js";

const sendMail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodeMailerConfig);
  const message = {
    from: "Verna <verna.vonrueden15@ethereal.email>",
    to,
    subject,
    html,
  };
  return transporter.sendMail(message);
};

export default sendMail;
