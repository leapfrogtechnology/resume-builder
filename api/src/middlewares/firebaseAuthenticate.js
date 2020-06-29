import HttpStatus from 'http-status-codes';
import { fetchByEmail, checkIsUserAdmin } from '../services/userService';

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
  const isAdmin = await checkIsUserAdmin(req.email);
  const isAuth = req.email === req.params.email ? true : isAdmin === true ? true : false;

  if (isAuth) {
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
