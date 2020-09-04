import { ICustomer } from "./customer.types";
import { AppError, ERROR_CODES } from "../../common/errors/errors";

const login = (customerId: string): Promise<ICustomer> =>
  Promise.resolve({ customerId: customerId }).catch(error => {
    throw new AppError(ERROR_CODES.INTERNAL_SERVER_ERROR, error);
  });

const customerRepository = {
  login
};

export default customerRepository;
