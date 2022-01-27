const { getContentPath } = require("@src/services/core-fm");

const routes = (fastify, opts, done) => {
  fastify.post("/get-content", getContentPath);
  done();
};

module.exports = routes;
