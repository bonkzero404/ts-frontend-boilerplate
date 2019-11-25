require('dotenv').config();

const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
  src: path.join(root, process.env.SOURCE_DEV),
  out: path.join(root, process.env.BUILD_DEST),
};
