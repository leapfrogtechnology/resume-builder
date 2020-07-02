import { db } from '../db';
import * as userService from '../services/userService';

const { admin } = require('../utils/firebaseConfig');

/**
 * Update resume.
 *
 * @param {*} userId
 * @param {JSON} resume
 */
export const updateResume = async (userId, resume) => {
  const userRef = db.ref(`/users/${userId}/`);

  return userRef.update({ resume: JSON.stringify(resume) });
};

/**
 * Update resume by Admin.
 *
 * @param {*} userId
 * @param {JSON} resume
 */
export const updateResumeByAdmin = async (userEmail, resume) => {
  try {
    const user = await userService.fetchByEmail(userEmail);

    const userRef = db.ref(`/users/${user.uid}/`);

    return userRef.update({ resume: JSON.stringify(resume) });
  } catch (err) {
    throw err;
  }
};

/**
 * Delete resume.
 *
 * @param {*} userId
 */
export const deleteResume = (userId, resume) => {
  const userRef = db.ref(`/users/${userId}/resume`);

  return userRef.set(JSON.stringify(resume));
};

/**
 * Get resume.
 *
 * @param {*} userId
 */
export const fetchResume = async (email) => {
  try {
    const user = await admin.auth().getUserByEmail(email);

    const userRef = db.ref(`/users/${user.uid}`);

    return userRef.once('value').then((snapshot) => {
      return snapshot.val().resume;
    });
  } catch (err) {
    console.error(err);

    throw err;
  }
};
