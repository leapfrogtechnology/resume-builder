import { db } from '../db';

/**
 *  Creates new session for new login.
 *
 * @param {*} userParams
 * @returns {Promise}
 */
export const createSession = (userParams) => {
  const sessionRef = db.ref(`/session/${userParams.user.uid}`);

  return sessionRef.set({
    username: userParams.user.name,
    createdAt: new Date(),
    refreshToken: userParams.tokens.refreshToken,
  });
};

/**
 * Deletes Session after logout.
 *
 * @param {*} userParams
 * @returns
 */
export const deleteSession = (userId) => {
  const sessionRef = db.ref(`/session/${userId}`);

  return sessionRef.remove();
};

/**
 * Get session of loggged in user.
 *
 * @param {*} refreshToken
 * @returns
 */
export const getSession = (refreshToken) => {
  const sessionRef = db.ref(`/session`);

  return sessionRef.once('value').then((snapshot) => {
    const sessions = snapshot.val();

    const index = Object.keys(sessions).find((key) => {
      return sessions[key].refreshToken === refreshToken;
    });

    if (index) {
      return sessions[index];
    }
  });
};
