module.exports = async () => {
  return {
    testEnvironment: "node",
    coveragePathIgnorePatterns: ["/node_modules/"],
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
    collectCoverageFrom: [
      "src/**/*.{ts,js}",
      "!src/**/*.(interface|constant|type|validator).{ts,js}",
      "!**/__mocks__/**",
      "!**/node_modules/**",
    ],
  };
};
