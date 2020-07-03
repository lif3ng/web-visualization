const baseURL = require('../../scripts/getBaseUrl')
module.exports = (src) => {
  return process.env.NODE_ENV === "development"
    ? src
    : src.replace(
        /<!-- demo (.*) -->/g,
        `<iframe src="${baseURL}demos/#/$1" width="100%" height="300px"></iframe>`
      );
};
