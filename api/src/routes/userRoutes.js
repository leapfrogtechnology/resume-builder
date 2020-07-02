import { Router } from 'express';

import * as userController from '../controllers/users';
import { ensureToken } from '../middlewares/ensureToken';
import { authenticateUser } from '../middlewares/firebaseAuthenticate';

const router = Router();

/**
 * GET /users/self
 */
router.get('/self', ensureToken, authenticateUser, userController.fetchUserProfile);

export default router;
