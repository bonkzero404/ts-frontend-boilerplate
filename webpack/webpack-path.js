const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
  root,
  src: path.join(root, 'src'),
  public: path.join(root, 'public'),
  out: path.join(root, 'dist'),
};
