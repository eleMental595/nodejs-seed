export interface IRoute {
  path: string;
  router: any;
}

export interface IRoutes {
  allRoutes: IRoute[];
  init?: any;
}
