import { Router } from 'express';

import authController from './controllers/auth';
import resumeRoutes from './routes/resumeRoutes';

/**
 * Contains all API routes for the application.
 */
const router = Router();

router.use('/', authController);
router.use('/resume', resumeRoutes);

export default router;
