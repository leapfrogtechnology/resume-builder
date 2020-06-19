import HttpStatus from 'http-status-codes';
import * as googleAuth from 'google-auth-library';

import { GSUITE_DOMAIN } from '../constant';
import logger from '../utils/logger';

const OAuth2Client = new googleAuth.OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_SECRET);

/**
 * Validate the users' google id using google-auth-library.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 *
 */
const validateGoogleToken = async (req, res, next) => {
  try {
    const ticket = await OAuth2Client.verifyIdToken({ idToken: req.body.tokenId });
    const payload = ticket.getPayload();

    if (payload) {
      const domain = payload['hd'];

      if (!domain || domain !== GSUITE_DOMAIN) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          message: 'Sign in with lftechnology domain',
        });
      }

      const data = {
        idToken: req.body.tokenId,
        email: payload.email,
        name: payload.name,
      };
      req.user = data;

      logger.info('Google Authentication successful');
      return next();
    }

    return res.status(HttpStatus.UNAUTHORIZED).json({
      message: 'Unauthorized access',
    });
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
};

export default validateGoogleToken;
