import config = require("nconf");
import * as defaultConfig from "./default.json";
import { merge } from "lodash";

export { config };

export const loadConfig = (overRideObject = {}) => {
  config.argv().env();

  const env = config.get("NODE_ENV") || "default";
  try {
    const envConfig = require(`./${env}.json`);

    config.overrides(merge(config.get(), envConfig, overRideObject));
  } catch (error) {
    throw new Error(error);
  } finally {
    config.defaults(defaultConfig);
  }
};
