import Router from 'express';

import { ensureToken } from '../middlewares/ensureToken';
import * as resumeController from '../controllers/resume';
import { authenticateAdmin } from '../middlewares/authenticateAdmin';
import { authenticateUser } from '../middlewares/firebaseAuthenticate';

const router = Router();

/**
 * PUT /api/resume
 */
router.put('/', ensureToken, authenticateUser, resumeController.updateResume);

/**
 * PUT /resume/edit/:email
 */
router.put('/edit/:email', ensureToken, authenticateAdmin, resumeController.updateResumeByAdmin);

/**
 * GET /api/resume/:email
 */
router.get('/:email', resumeController.fetchResume);

/**
 * DELETE /api/resume/delete
 */
router.delete('/delete', ensureToken, authenticateUser, resumeController.deleteResume);

export default router;
