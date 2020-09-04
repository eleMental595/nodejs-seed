import jwt from "jsonwebtoken";
import { JWT_CONFIG } from "../configs/JWT_CONFIG";
import { AppError, ERROR_CODES } from "./errors/errors";

export const isAuthenticated = (req: any, res: any, next: any) => {
  if (typeof req.headers.authorization !== "undefined") {
    const token = req.headers.authorization.split(" ")[1];
    const privateKey = JWT_CONFIG.secret;

    jwt.verify(token, privateKey, (err: any) => {
      if (err) {
        res.status(401).send(new AppError(ERROR_CODES.UNAUTHORISED, []));
        throw new Error("Not Authorized");
      }
      return next();
    });
  } else {
    res.status(401).send(new AppError(ERROR_CODES.UNAUTHORISED, []));
  }
};

export const getAuthPayload = (req: any) => {
  console.log(req);
  return {
    adminUserId: "admin123"
  };
};
