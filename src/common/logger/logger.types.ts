interface LogMethod {
  (message: string, meta?: any): void;
}

interface Logger {
  info: LogMethod;
  error: LogMethod;
  warn: LogMethod;
  debug: LogMethod;
  critical: LogMethod;
  onFinished(callback: () => void): void;
}

enum LevelEnum {
  critical = "critical",
  error = "error",
  warn = "warn",
  info = "info",
  debug = "debug",
}

const customLevels = {
  levels: {
    critical: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
  },
};

interface InitOptions {
  level?: LevelEnum;
  defaultMeta?: Object;
}

export { Logger, LogMethod, InitOptions, LevelEnum, customLevels };
