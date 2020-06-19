import HttpStatus from 'http-status-codes';
import { ADMIN_EMAIL } from '../constant';
import { fetchByEmail } from '../services/userService';

/**
 * Authenticate User in firebase.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
export const authenticateUser = async (req, res, next) => {
  try {
    const user = await fetchByEmail(req.email);
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * Authenticate Request .
 *
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
export const authenticateRequest = async (req, res, next) => {
  if (req.email === req.params.email || req.email === ADMIN_EMAIL) {
    try {
      const user = await fetchByEmail(req.params.email);
      req.uid = user.uid;

      next();
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      message: 'Unauthorized access',
    });
  }
};
