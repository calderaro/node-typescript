import express from "express";
import chalk from "chalk";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router";

const log = console.log;
const port = process.env.PORT || 3000;

const app = express();

app
  .disable("x-powered-by")
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router)
  .listen(port);

log(chalk.green(`Listening on port ${port}`));
