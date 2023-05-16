import jwt from "jsonwebtoken";

import * as CustomError from "../errors/index.js";

const auth = async (req, res, next) => {
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

export default auth;
