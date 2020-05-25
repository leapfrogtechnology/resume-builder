import Router from 'express';

import { ensureToken } from '../middlewares/ensureToken';
import * as resumeController from '../controllers/resume';

const router = Router();

/**
 * PUT /api/resume
 */
router.put('/', ensureToken, resumeController.updateResume);

/**
 * GET /api/resume/:email
 */
router.get('/:email', resumeController.fetchResume);

/**
 * DELETE /api/resume/delete
 */
router.delete('/delete', ensureToken, resumeController.deleteResume);

export default router;
