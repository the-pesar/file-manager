const { checkAuth } = require("@src/middlewares/auth");
const { getContentUserPath } = require("@src/services/core-fm");
const { login, register } = require("@src/services/sign");
const { vRegister, vLogin } = require("@src/validations");

const routes = (fastify, opts, done) => {
  fastify.post("/register", { schema: { body: vRegister } }, register);
  fastify.post("/login", { schema: { body: vLogin } }, login);
  fastify.post("/get-content", { preHandler: checkAuth }, getContentUserPath);
  done();
};

module.exports = routes;
