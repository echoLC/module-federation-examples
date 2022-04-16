const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        app2: process.env.NODE_NV !== "production" ? 'app2@http://localhost:3002/remoteEntry.js' : 'app2@http://localhost:5002/remoteEntry.js',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './share': './src/share',
        './Input': './src/components/Input',
        './date': './src/utils/date',
        './lodash': './src/utils/lodash',
      },
      shared: ['react', 'react-dom', 'antd', 'lodash', 'moment'],
      shared: {
        react: {},
        'react-dom': {},
        antd: {},
        moment: {},
        lodash: {
          eager: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
