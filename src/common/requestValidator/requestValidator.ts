import { validationResult } from "express-validator";
import { ERROR_CODES } from "../errors/errors";
import status from "http-status";

export const validate = (req: any, res: any, next: any) => {
  const errors: any = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(status.BAD_REQUEST).send({
    error: {
      message: ERROR_CODES.REQUEST_DID_NOT_MATCH,
      errorList: errors.errors
    }
  });
};
