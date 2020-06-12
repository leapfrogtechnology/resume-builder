const path = require('path');
const webpack = require('webpack');
const withImages = require('next-images');
const localEnv = require('dotenv').config();

module.exports = withImages({
  webpack: config => {
    config.resolve.alias['~'] = path.resolve('src');
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        API_BASE_URL: process.env.API_BASE_URL,
      })
    );

    return config;
  },
});
