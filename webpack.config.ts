import { Configuration } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

type C = Configuration;

const config: C = {
  entry: {
    index: `${__dirname}/src/index.tsx`,
  },
  output: {
    path: resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /.(eot|woff2?|svg|ttf|png|jpe?g)([?]?.*)$/,
        loader: 'file-loader',
        sideEffects: true,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
  // devServer: {
  //   historyApiFallback: true,
  //   allowedHosts: ['localhost'],
  //   publicPath: '/',
  // },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 2000,
    },
  },
};

module.exports = config;
