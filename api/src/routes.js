import { Router } from 'express';

import userRoutes from './routes/userRoutes';
import authController from './controllers/auth';
import resumeRoutes from './routes/resumeRoutes';
/**
 * Contains all API routes for the application.
 */
const router = Router();

router.use('/', authController);
router.use('/resume', resumeRoutes);
router.use('/users', userRoutes);

export default router;
