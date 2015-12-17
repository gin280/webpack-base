var path = require('path');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [{
       test: /\.jsx?$/,
      loader: 'babel'
    },
     {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },
     {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    },
    // SASS
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};