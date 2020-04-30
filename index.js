// modules
let reader = require("./src/reader");
let parser = require("./src/parser");
let writer = require("./src/writer");
// load markdown
let md = reader.load("README.md");
// emojify
let emojified = parser.emojify(md);
// save for github pages
writer.save(emojified);