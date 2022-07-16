const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Javascript Calculator',
      template: path.join(__dirname, "src", "index.html"),
      minify: true
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          }, 
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          }
        ]
      },
      {
        test: /\.(png|svg|jpeg|webp|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}