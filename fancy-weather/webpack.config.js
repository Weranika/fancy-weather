const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      // { enforce: 'pre', test: /\.js$/ }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',              
            },
          },
        ],
      },     
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }, 
};