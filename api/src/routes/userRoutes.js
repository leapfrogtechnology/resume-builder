import { Router } from 'express';

import * as userController from '../controllers/users';
import { ensureToken } from '../middlewares/ensureToken';

const router = Router();

/**
 * GET /api/users/:email
 */
router.get('/:email', ensureToken, userController.fetchUserProfile);

export default router;
