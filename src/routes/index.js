const { isAuth } = require("../middlewares/auth");
const { getFiles } = require("../services/FileManagement");

const routes = (fastify, opts, done) => {
  fastify.get("/", { preHandler: isAuth }, getFiles);
  done();
};

module.exports = routes;
