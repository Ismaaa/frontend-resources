// libs
let fs = require("fs");
let path = require("path");
// config
let config = require("../config");

module.exports = {
  load: function (fileName) {
    return fs.readFileSync(path.resolve(config.rootFolder, fileName), "utf8");
  },
};
