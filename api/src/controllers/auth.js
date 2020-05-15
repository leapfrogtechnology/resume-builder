import { Router } from 'express';

import validateGoogleToken from './../middlewares/verifyGoogleToken';
import * as userService from './../services/userService';

const router = Router();

/**
 * Authenticate google login /api/auth/google
 */
router.post('/auth/google', validateGoogleToken, (req, res, next) => {
  userService
    .loginUser(req.user)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
});

export default router;
