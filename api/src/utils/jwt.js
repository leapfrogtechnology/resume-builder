import Boom from '@hapi/boom';
import jwt from 'jsonwebtoken';

const CONFIG = require('../config.json');

/**
 * Generate both Access Token and Refresh Token.
 *
 * @param {*} userData
 * @returns {Promise}
 */
export const genrateTokens = (userData) => {
  return {
    accessToken: generateAccessToken(userData),
    refreshToken: generateRefreshToken(userData),
  };
};

/**
 * Generate Access Token.
 *
 * @param {*} data
 * @returns {Promise}
 */
export const generateAccessToken = (data) => {
  return jwt.sign({ encryptedData: data }, CONFIG.ACCESS_TOKEN_SALT, {
    expiresIn: CONFIG.ACCESS_EXPIRY_TIME,
  });
};

/**
 * Generate Refresh Token.
 *
 * @param {*} data
 * @returns {Promise}
 */
export const generateRefreshToken = (data) => {
  return jwt.sign({ encryptedData: data }, CONFIG.REFRESH_TOKEN_SALT, { expiresIn: CONFIG.REFRESH_EXPIRY_TIME });
};

/**
 * Verify Access Token.
 *
 * @param {*} token
 * @returns {Promise}
 */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, CONFIG.ACCESS_TOKEN_SALT, (err, decode) => {
    if (!err) {
      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('Access Token Unauthorized'));
    }
  });
};

/**
 * Verify Refresh Token.
 *
 * @param {*} token
 * @returns {Promise}
 */
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, CONFIG.REFRESH_TOKEN_SALT, (err, decode) => {
    if (!err) {
      return Promise.resolve(decode);
    } else {
      return Promise.reject(Boom.unauthorized('Refresh Token Unauthorized'));
    }
  });
};
