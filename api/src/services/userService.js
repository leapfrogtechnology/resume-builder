import { db } from '../db';
import { ADMIN_EMAIL } from '../constant';
import * as tokenService from './tokenService';
import * as sessionService from './sessionService';
import logger from '../utils/logger';
import { ADMIN_EMAIL } from '../constant';

const { firebase, admin } = require('../utils/firebaseConfig');

/**
 * Check the firebase to see if user exist and if exists, return token. Otherwise, login the user into firebase and return token.
 *
 * @param {Object} data
 * @returns {Promise}
 */
export const loginUser = async (data) => {
  try {
    const { idToken, email, name } = data;

    const user = await fetchByEmail(email);

    const isAdmin = email === ADMIN_EMAIL ? true : false;

    if (!user) {
      const credential = await firebase.auth.GoogleAuthProvider.credential(idToken);
      const userLogin = await firebase.auth().signInWithCredential(credential);

      const tokens = tokenService.generateTokens({ email: userLogin.user.email, uid: userLogin.user.uid });

      const userInfo = {
        user: {
          uid: userLogin.user.uid,
          name,
          email,
        },
        tokens,
      };

      await createUser(userInfo.user);
      await sessionService.createSession(userInfo);

      return { username: userInfo.user.name, email: userInfo.user.email, isAdmin: isAdmin, tokens: userInfo.tokens };
    }
    const tokens = tokenService.generateTokens({ email: user.email, uid: user.uid });

    const userInfo = {
      user: {
        uid: user.uid,
        name,
        email,
      },
      tokens,
    };

    await sessionService.createSession(userInfo);
    return { username: userInfo.user.name, email: userInfo.user.email, isAdmin: isAdmin, tokens: userInfo.tokens };
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
};

/**
 * Fetch User by email.
 *
 * @param {*} email
 * @returns {Promise}
 */
export const fetchByEmail = async (email) => {
  try {
    const result = await admin.auth().getUserByEmail(email);

    return result;
  } catch (err) {
    if (err.code === 'auth/user-not-found') {
      return null;
    }

    throw err;
  }
};

/**
 * Create User profile.
 *
 * @param {*} userInfo
 * @returns {Promise}
 */
export const createUser = (userInfo) => {
  const userRef = db.ref(`users/${userInfo.uid}`);

  return userRef.set({
    name: userInfo.name,
    email: userInfo.email,
    resume: '{}',
  });
};

/**
 * Fetch User Profile (Resume) by uid.
 *
 * @param {*} uid
 * @returns {Promise}
 */
export const fetchUserProfile = async (uid) => {
  try {
    const userRef = db.ref(`users/${uid}`);
    const snapshot = await userRef.once('value');

    return snapshot.val().resume;
  } catch (err) {
    throw err;
  }
};
