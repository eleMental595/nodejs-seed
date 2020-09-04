import { IRoutes } from "./routes.types";
import customerRouter from "../routes/customer/customer.routes";

const routes: IRoutes = {
  allRoutes: [{ path: "/customer", router: customerRouter.router }],
};

routes.init = (app: any) => {
  if (!app || !app.use) {
    console.error(
      "[Error] Route Initialization Failed: app / app.use is undefined"
    );
    return process.exit(1);
  }

  routes.allRoutes.forEach((route) => app.use(route.path, route.router));

  app.use("*", (request: any, response: any, next: any) => {
    const message = ["Cannot", request.method, request.originalUrl].join(" ");
    next(message);
  });

  app.use((error: any, request: any, response: any, next: any) => {
    if (!error) {
      return;
    }
    console.log(error);
    if (error.status) {
      response.statusMessage = error.message;
      return response.status(error.status).send({
        error: {
          message: error.message,
          errorList: error.errorList,
        },
      });
    }
    return response.status(500).send({
      error: {
        message: error.message,
        errorList: error,
      },
    });
  });
};

export { routes };
