import * as jwt from '../utils/jwt';

/**
 * Generate both Access Token and Refresh Token.
 *
 * @param {*} userData
 * @returns {Promise}
 */
export const generateTokens = (userData) => {
  return jwt.genrateTokens(userData);
};

/**
 * Verify Access Token.
 *
 * @param {*} accessToken
 * @returns {Promise}
 */
export const verifyAccessToken = (accessToken) => {
  return jwt.verifyAccessToken(accessToken);
};

/**
 * Verify Refresh Token.
 *
 * @param {*} refreshToken
 * @returns {Promise}
 */
export const verifyRefreshToken = async (refreshToken) => {
  const decodedToken = await jwt.verifyRefreshToken(refreshToken);

  return jwt.generateAccessToken(decodedToken.encryptedData);
};
