const path = require('path');
const root = path.resolve(__dirname, '..');

require('dotenv').config();

module.exports = {
  src: path.join(root, process.env.SOURCE_DEV),
  out: path.join(root, process.env.BUILD_DEST),
};
