const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});
//
// rules.push({
//   test: /\.svg$/i,
//   issuer: /\.[jt]sx?$/,
//   use: [{ loader: '@svgr/webpack', options: {
//     // icon: true
//   } }],
// });

rules.push({
  test: /\.(png|jp(e*)g|svg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[hash]-[name].[ext]',
      },
    },
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      "Api": path.resolve(__dirname, './src/api'),
      "Assets": path.resolve(__dirname, './src/assets/'),
      "Components": path.resolve(__dirname, './src/components'),
      "Layouts": path.resolve(__dirname, './src/layouts'),
      "Services": path.resolve(__dirname, './src/services'),
      "Views": path.resolve(__dirname, './src/views'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
