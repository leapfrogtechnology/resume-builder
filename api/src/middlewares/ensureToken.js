import * as CONSTANT from '../constant';
import * as tokenService from '../services/tokenService';

/**
 * Verifies access token.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
export const ensureToken = (req, res, next) => {
  req.token = req.headers.authorization.substring(CONSTANT.BEARER_LENGTH);

  tokenService
    .verifyAccessToken(req.token)
    .then((response) => {
      req.email = response.encryptedData.email;
      req.uid = response.encryptedData.uid;
      next();
    })
    .catch((error) => next(error));
};
