const fs = require("fs/promises");
const path = require("path");

class FileManagment {
  async initUserDirectory(username) {
    fs.mkdir(path.join(__dirname, "/../../cloud/", username))
  }
}

module.exports = FileManagment;
