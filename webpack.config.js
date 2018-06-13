const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: [".js", ".json", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'dist',
    open: true
  }
};
