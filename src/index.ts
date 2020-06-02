import express from "express";
import chalk from "chalk";
import cors from "cors";
import bodyParser from "body-parser";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import algoliasearch from "algoliasearch";
import router from "./router";
import { getClient } from "./utils/algolia";

const log = console.log;
const port = process.env.PORT || 3000;

const app = express();

app
  .disable("x-powered-by")
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router);

async function init() {
  const algolia = await getClient();
  app.listen(port);
  log(chalk.green(`Listening on port ${port}`));
}

init();
