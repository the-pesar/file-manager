const { isAuth } = require("@src/middlewares/auth");
const FileManagment = require("@src/services/core-fm");
const sign = require("@src/services/sign");
const { vRegister, vLogin } = require("@src/validations");

const routes = (fastify, opts, done) => {
  fastify.post("/register", { schema: { body: vRegister } }, sign.register);
  fastify.post("/login", { schema: { body: vLogin } }, sign.login);
  done();
};

module.exports = routes;
