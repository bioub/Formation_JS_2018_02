const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {

  const plugins = [new HtmlWebpackPlugin({
    template: './src/index.html',
  })];

  if (env === 'prod') {
    plugins.push(new UglifyJSWebpackPlugin());
  }

  return {
    entry: './src/app/main',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.[hash].js',
    },
    plugins,
    devtool: (env === 'dev') ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['env', {
                modules: false,
                targets: {
                  browsers: ['Chrome 64']
                }
              }]]
            }
          }
        }
      ]
    }
  };
};
