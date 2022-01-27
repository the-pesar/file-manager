const { mkdirSync, readdirSync, lstatSync } = require("fs");
const { join } = require("path");

const byteConvertor = (byte, to) => {
  return {
    kb: (byte) => byte / 1000,
    mb: (byte) => byte / 1000 / 1000,
    gb: (byte) => byte / 1000 / 1000 / 1000,
    tb: (byte) => byte / 1000 / 1000 / 1000 / 1000,
  }
    [to](byte)
    .toFixed(2);
};

const setValidSize = (size) => {
  if (size <= 100000) return byteConvertor(size, "kb") + "Kb";
  if (size <= 100000000) return byteConvertor(size, "mb") + "Mb";
  if (size <= 100000000000) return byteConvertor(size, "gb") + "Gb";
  if (size <= 100000000000000) return byteConvertor(size, "tb") + "Tb";
  else return -1;
};

const setNameAndSuffix = (name, info) => {
  let suffix = "";

  if (info.isDirectory()) {
    suffix = "";
  } else {
    suffix = name.split(".").at(-1);
    name = name.slice(0, name.search(suffix) - 1);
  }
  return { name, suffix };
};

const getContentPath = async (request, reply) => {
  try {
    const { path } = request.body;

    const checkSec = path.indexOf("../");

    if (checkSec !== -1) {
      reply.status(403).send({ msg: "security" });
      return;
    }

    let content = readdirSync(join(__dirname, "/../../cloud", path));

    content = content.map((item) => {
      const info = lstatSync(join(__dirname, "/../../cloud/", path, item));

      const { name, suffix } = setNameAndSuffix(item, info);
      const type = info.isDirectory() ? "directory" : "file";

      return {
        name,
        suffix,
        size: type === "file" ? setValidSize(info.size) : "",
        type,
      };
    });

    reply.send({ msg: "ok", content });
  } catch (err) {
    console.log(err);
    reply.send({ msg: "directory not exists" });
  }
};

module.exports = { getContentPath };
