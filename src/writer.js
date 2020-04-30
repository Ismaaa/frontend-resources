// libs
let fs = require("fs");
let path = require("path");
// vars
let config = require("../config");

module.exports = {
  saveHtml: function (content) {
    fs.writeFile(config.outputFileName, content, function (err) {
      if (err) return console.log(err);
    });
  },
};
