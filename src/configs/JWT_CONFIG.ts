const JWT_CONFIG = {
  secret: "secret",
  authenticationNotRequiredAPIs: ["/login"],
  getAuthenticationNotRequiredAPIs: (path: string) => {
    let result = false;
    JWT_CONFIG.authenticationNotRequiredAPIs.forEach(elem => {
      if (path.search(elem) > -1) {
        result = true;
      }
    });
    return result;
  }
};

export { JWT_CONFIG };
