const getFiles = (request, reply) => {
  reply.send({ test: "hello world" });
};
module.exports = { getFiles };