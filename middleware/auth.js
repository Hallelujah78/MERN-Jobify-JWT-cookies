import jwt from "jsonwebtoken";
import { isTokenValid, attachCookiesToResponse } from "../utils/jwt.js";
import * as CustomError from "../errors/index.js";

const authenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;
  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }
    const payload = isTokenValid(refreshToken);
    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });
    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError("invalid credentials");
    }
    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });
    req.user = payload.user;
    next();
  } catch (error) {
    console.log("AUTHENTICATE_USER_CATCH_ERROR");
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const authSingleCookie = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new CustomError.UnauthenticatedError("NO_TOKEN: unauthenticated");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const testUser = payload.userId === "6446d438c18d00c279afd42a";
    req.user = { userId: payload.userId, testUser };

    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError(
      "VERIFY_TOKEN: authentication invalid"
    );
  }
};

export { authSingleCookie, authenticateUser };
