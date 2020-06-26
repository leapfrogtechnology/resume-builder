import Router from 'express';

import { ensureToken } from '../middlewares/ensureToken';
import * as resumeController from '../controllers/resume';
import { authenticateRequest, authenticateUser } from '../middlewares/firebaseAuthenticate';

const router = Router();

/**
 * PUT /resume/:email/edit
 */
router.put('/:email/edit', ensureToken, authenticateRequest, resumeController.updateResume);

/**
 * PUT /resume/self/save
 */
router.put('/self/save', ensureToken, authenticateUser, resumeController.updateResume);

/**
 * GET /resume/:email/preview
 */
router.get('/:email/preview', resumeController.fetchResume);

/**
 * GET /resume/:email/edit
 */
router.get('/:email/edit', ensureToken, authenticateRequest, resumeController.fetchResume);

/**
 * DELETE /resume/delete
 */
router.delete('/delete', ensureToken, authenticateUser, resumeController.deleteResume);

export default router;
