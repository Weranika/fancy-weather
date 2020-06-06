const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new CleanWebpackPlugin(),       
  // ],
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