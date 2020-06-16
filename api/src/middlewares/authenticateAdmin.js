import { ADMIN_EMAIL } from '../constant';

/**
 * Authenticate User in firebase.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
export const authenticateAdmin = async (req, res, next) => {
  if (req.email === ADMIN_EMAIL) next();
};
