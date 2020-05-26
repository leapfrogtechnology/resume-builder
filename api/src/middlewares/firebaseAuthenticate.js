import { fetchByEmail } from '../services/userService';

export const authenticateUser = async (req, res, next) => {
  try {
    const user = await fetchByEmail(req.params.email);

    req.uid = user.uid;

    next();
  } catch (err) {
    next(err);
  }
};
