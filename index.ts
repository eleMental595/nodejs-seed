import logger from "./src/common/logger";
import express from "express";
import cors from "cors";
import { routes } from "./src/routes";
import { loadConfig, config } from "./configs/config.utils";
import { merge } from "lodash";
const app = express();

import defaultConf from "./configs/default.json";
const env = process.env.NODE_ENV;
const envConf = env ? require(`./configs/${env}.json`) : {};
loadConfig(merge(defaultConf, envConf));

const PORT = config.get("port");
console.log(PORT);
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  logger.info("Server has started.");
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

routes.init(app);
