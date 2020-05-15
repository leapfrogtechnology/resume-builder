import { Router } from 'express';

import authController from './controllers/auth';

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.use('/', authController);

export default router;
