// config
let config = require("../config");

module.exports = {
  replaceUrls: function (content) {
    // Replace old custom domain, which is cached
    let withNewUrl = content.split(config.oldUrl).join(config.newUrl);
    // Replace the assets url and get the css from the github page
    let result = withNewUrl
      .split('"/frontend-resources')
      .join('"' + config.githubPagesUrl);

    return result;
  },
};
