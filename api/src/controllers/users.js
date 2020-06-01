import * as userService from '../services/userService';

export const fetchUserProfile = (req, res, next) => {
  userService
    .fetchUserProfile(req.uid)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
};
