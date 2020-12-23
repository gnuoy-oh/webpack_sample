const filterEnv = require("./filter-env.js");

let PROJECT_NAME = filterEnv.NEW_PROJECT_NAME;
let SERVICE_NAME = filterEnv.NEW_SERVICE_NAME;
let folderName = PROJECT_NAME + SERVICE_NAME;

let piece = {
  entry: {
    [folderName]: `./assets/js/${folderName}.js`
  }
};

exports.piece = piece;

