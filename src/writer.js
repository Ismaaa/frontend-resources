// libs
let fs = require("fs");
// config
let config = require("../config");

module.exports = {
  save: function (content) {
    fs.writeFile(config.outputFileName, content, function (err) {
      if (err) return console.log(err);
    });
  },
};
