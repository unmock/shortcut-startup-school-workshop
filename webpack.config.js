const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [js],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
  },
  plugins: [new CopyPlugin([
    { from: 'src/static', to: 'static' },
  ])],
};

module.exports = [serverConfig];
