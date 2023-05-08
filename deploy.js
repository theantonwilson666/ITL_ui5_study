const fs = require("fs");
const yaml = require("js-yaml");
const dotenv = require("dotenv");
const { execSync } = require("child_process");
const { exit } = require("process");
const { getApps } = require("./utils");

const buildCommand = (app) => {
  let command = "npx nwabap upload";

  Object.keys(app).forEach((param) => {
    command = command.concat(` --${param} ${app[param]}`);
  });

  return command;
};

const deployApp = async () => {
  dotenv.config();

  const deployApps = process.argv.slice(2);
  const {onDeploy: apps} = await getApps(deployApps);

  //Deployment
  apps.forEach((app) => {
    console.log("START DEPLOYMENT");
    console.log(app);

    console.log("EXEC:", buildCommand(app));
    execSync(buildCommand(app), { stdio: "inherit" });
  });
};

try {
  deployApp();
} catch (error) {
  console.log("ERROR:", error);
  exit(-1);
}
