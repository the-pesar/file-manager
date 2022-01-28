const {
  getContentPath,
  createFile,
  createDirectory,
  rmFileDirectory,
} = require("@src/services/core-fm");

const routes = (fastify, opts, done) => {
  fastify.post("/get-content", getContentPath);
  fastify.post("/create-file", createFile);
  fastify.post("/create-directory", createDirectory);
  fastify.post("/remove", rmFileDirectory);

  done();
};

module.exports = routes;
