const path = require('path');

module.exports = {
  entry: './js/threejs/main.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};