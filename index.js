// libs
let http = require("http");
var afterLoad = require("after-load");
// modules
let config = require("./config");
let cleaner = require("./src/cleaner");
let parser = require("./src/parser");
let writer = require("./src/writer");
// http config
let options = {
  host: config.githubPagesUrl,
  port: 80,
};
// download github page with cool styles, emojify and fix urls
afterLoad(config.githubPagesUrl, function (html) {
  // fix cached / old urls
  let cleanHtml = cleaner.replaceUrls(html);
  // emojify the whole html
  let emojified = parser.emojify(cleanHtml);
  // save to file
  writer.saveHtml(emojified);
});
