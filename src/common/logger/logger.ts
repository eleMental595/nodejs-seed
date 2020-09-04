import {
  Logger,
  InitOptions,
  LevelEnum,
  customLevels,
  LogMethod,
} from "./logger.types";
import {
  createLogger,
  transports,
  format,
  Logger as WinstonOwnLogger,
} from "winston";
import { isObject } from "lodash";

class WinstonLogger implements Logger {
  logger: WinstonOwnLogger;

  constructor({ defaultMeta, level }: InitOptions) {
    this.logger = createLogger({
      defaultMeta,
      level: level || LevelEnum.debug,
      format: format.json(),
      levels: customLevels.levels,
      transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" }),
      ],
    });
  }

  getLoggingMessage = (meta: unknown) => {
    let message = {};
    if (
      // Grouping non object fields under meta
      isObject(meta) &&
      !(meta instanceof Error) &&
      !(meta instanceof Array)
    ) {
      message = { ...meta };
    } else message = { meta };
    return message;
  };

  info: LogMethod = (message, meta) => {
    this.logger.info(message, this.getLoggingMessage(meta));
  };
  error: LogMethod = (message, meta) => {
    this.logger.error(message, this.getLoggingMessage(meta));
  };
  warn: LogMethod = (message, meta) => {
    this.logger.warn(message, this.getLoggingMessage(meta));
  };
  debug: LogMethod = (message, meta) => {
    this.logger.debug(message, this.getLoggingMessage(meta));
  };
  critical: LogMethod = (message, meta) => {
    this.logger.log(LevelEnum.critical, message, this.getLoggingMessage(meta));
  };
  onFinished = (callback: () => void) => {
    this.logger.on("finish", callback);
  };
}

export default WinstonLogger;
