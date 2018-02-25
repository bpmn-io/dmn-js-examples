var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: [
              'inferno',
              'transform-object-rest-spread',
              'transform-class-properties'
            ],
            presets: [ 'env' ]
          }
        }
      },
      {
        test: /\.dmn$/,
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  }
};