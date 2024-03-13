const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The entry point for the application
  entry: './src/index.js',

  // The output configuration for Webpack
  output: {
    // The output directory as an absolute path
    path: path.resolve(__dirname, 'dist'),
    // The name of the output bundle
    filename: 'bundle.js'
  },

  // Configuration for the development server
  devServer: {
    static: './dist',
  },

  // The plugins array
  plugins: [
    // Configuration for the HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      // The path to the template file
      template: 'src/index.html'
    })
  ],

  // Module resolution rules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
