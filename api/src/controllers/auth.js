import { Router } from 'express';

import * as userService from '../services/userService';
import * as tokenService from '../services/tokenService';

import validateRefreshToken from '../middlewares/validateToken';
import validateGoogleToken from '../middlewares/verifyGoogleToken';

const router = Router();

/**
 * Authenticate google login /auth/google
 */
router.post('/auth/google', validateGoogleToken, (req, res, next) => {
  const user = req.user;

  userService
    .loginUser(user)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
});

router.post('/refresh', validateRefreshToken, (req, res, next) => {
  tokenService
    .verifyRefreshToken(req.token)
    .then((data) => res.json({ accessToken: data }))
    .catch((err) => next(err));
});

router.get('/', (req, res, next) => {
  return res.json({
    app: process.env.APP_NAME,
    version: process.env.APP_VERSION,
  });
});

export default router;
