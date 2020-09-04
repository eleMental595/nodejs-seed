import { check } from "express-validator";

export const customerLoginRequestValidator = [
  check("customerId")
    .exists()
    .isString()
];
