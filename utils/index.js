import checkPermissions from "./checkPermissions.js";
import createTokenUser from "./createTokenUser.js";

import sendMail from "./sendMail.js";
import sendVerificationEmail from "./sendVerificationEmail.js";
import sendResetPasswordEmail from "./sendResetPasswordEmail.js";
import { attachCookiesToResponse, createJWT, isTokenValid } from "./jwt.js";
import attachCookie from "./attackCookie.js";

export {
  attachCookie,
  createJWT,
  isTokenValid,
  createTokenUser,
  checkPermissions,
  sendMail,
  sendVerificationEmail,
  sendResetPasswordEmail,
  attachCookiesToResponse,
};
