const { rm, rmdir } = require("fs/promises");

rmdir("test").then(console.log);