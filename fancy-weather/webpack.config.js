const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: "empty"
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/ },
      {
        test: /\.js$/,
        exclude: /(node_modules)/        
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
        },     
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }, 
};