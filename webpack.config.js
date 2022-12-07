const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Practice Output Management',
    }),
  ],
   output: {
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };