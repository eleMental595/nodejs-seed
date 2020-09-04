import status from "http-status";

export class AppError extends Error {
  status: number;
  errorList: any;
  constructor(error: string, errorList: any) {
    super(appErrors[error].message);
    this.status = appErrors[error].status;
    this.name = this.constructor.name;
    this.errorList = errorList;
  }

  statusCode() {
    return this.status;
  }
  getErrorList() {
    return this.errorList;
  }
}

export const ERROR_CODES = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  BAD_REQUEST: "BAD_REQUEST",
  REQUEST_DID_NOT_MATCH: "REQUEST_DID_NOT_MATCH",
  UNAUTHORISED: "UNAUTHORISED"
};

const appErrors = {
  [ERROR_CODES.INTERNAL_SERVER_ERROR]: {
    status: status.INTERNAL_SERVER_ERROR,
    message: "Internal server error"
  },
  [ERROR_CODES.BAD_REQUEST]: {
    status: status.BAD_REQUEST,
    message: "Bad request"
  },
  [ERROR_CODES.UNAUTHORISED]: {
    status: status.UNAUTHORIZED,
    message: "user unauthorised"
  }
};
