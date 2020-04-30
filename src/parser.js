// libs
let emoji = require("node-emoji");

module.exports = {
  emojify: function (content) {
    const replacer = (match) => emoji.emojify(match);
    content = content.replace(/(:.*:)/g, replacer);

    return content;
  }
};
