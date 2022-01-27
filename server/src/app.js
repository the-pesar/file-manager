require("module-alias/register");
require("dotenv").config({ path: `${__dirname}/../.env` });
require("@src/plugins/colors.js");
const { existsSync, mkdirSync } = require("fs");
const path = require("path");

const routes = require("@src/routes");

const fastify = require("fastify")({
  logger: false,
});

fastify.register(routes, { prefix: "v1" });
fastify.register(require("fastify-cors"), { origin: "*" });

const checkCloud = existsSync(path.join(__dirname, "/../cloud"));

if (!checkCloud) mkdirSync(path.join(__dirname, "/../cloud"));

fastify.listen(process.env.FASTIFY_PORT, (error, address) => {
  if (error) throw error;
  else console.log(`App is running on the ${address}`.cSuccess);
});
