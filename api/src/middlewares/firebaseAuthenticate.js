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
