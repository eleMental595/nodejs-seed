import express from "express";
import customerService from "./customer.service";
import { ICustomer } from "./customer.types";
import { ResponseWrapper } from "../../common/response/responseWrapper";
import { customerLoginRequestValidator } from "./customer.validator";
import { validate } from "../../common/requestValidator/requestValidator";

const router = express.Router();

router.post(
  "/login",
  customerLoginRequestValidator,
  validate,
  async (req: any, res: any, next: any) => {
    try {
      const { customerId } = req.body;
      const result: ICustomer = await customerService.login(customerId);
      res.status(200).send(new ResponseWrapper(result));
    } catch (error) {
      next(error);
    }
  }
);

export default { router };
