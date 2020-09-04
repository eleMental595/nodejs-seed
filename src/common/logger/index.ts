import { InitOptions, Logger } from "./logger.types";
import WinstonLogger from "./logger";

const createLogger = (options: InitOptions): Logger => {
  return new WinstonLogger(options);
};

const logger = createLogger({
  defaultMeta: {
    service: "project-name",
  },
});

export default logger;
