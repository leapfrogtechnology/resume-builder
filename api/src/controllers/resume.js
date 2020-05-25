import * as resumeService from '../services/resumeService';

/**
 * Save resume in firebase.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const updateResume = (req, res, next) => {
  resumeService
    .updateResume(req.uid, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
};

/**
 * Fetch resume from resume
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const fetchResume = (req, res, next) => {
  resumeService
    .fetchResume(req.params.email)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};

/**
 * Delete resume in firebase.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const deleteResume = (req, res, next) => {
  resumeService
    .deleteResume(req.uid, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
};
