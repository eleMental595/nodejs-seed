import { ICustomer } from "./customer.types";
import customerRepository from "./customer.repository";

const login = (customerId: string): Promise<ICustomer> =>
  customerRepository.login(customerId);

const customerService = {
  login,
};

export default customerService;
