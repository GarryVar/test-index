const path = require('path');

module.export = {
  entry: {
    path: path.resolve(__dirname, 'src/scripts')
  },

  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js'
  }
}
