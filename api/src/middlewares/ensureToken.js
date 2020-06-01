import * as CONSTANT from '../constant';
import * as tokenService from '../services/tokenService';

/**
 * Verifies access token.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
export const ensureToken = async (req, res, next) => {
  req.token = req.headers.authorization.substring(CONSTANT.BEARER_LENGTH);

  try {
    const res = await tokenService.verifyAccessToken(req.token);

    req.uid = res.encryptedData.uid;
    req.email = res.encryptedData.email;

    next();
  } catch (err) {
    next(err);
  }
};
