const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('..', 'CarCheck24', 'wwwroot', 'js', 'react', 'shapes'),
    filename: 'bundle.js',
    library: 'shapes',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  // watch: true,
  devtool: 'inline-source-map',
};