require("./plugins/index.js");
const routes = require("./routes");

const fastify = require("fastify")({
  logger: false,
});

fastify.register(routes, { prefix: "v1" });

fastify.listen(process.env.FASTIFY_PORT, (error, address) => {
  if (error) throw error;
  else console.log(`App is running on the ${address}`.cSuccess);
});
