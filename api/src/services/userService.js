import Boom from '@hapi/boom';

import { db } from '../db';
import * as tokenService from './tokenService';
import * as sessionService from './sessionService';

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

    if (user && user.status) {
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken);

      const userLogin = await firebase.auth().signInWithCredential(credential);

      const tokens = tokenService.generateTokens({ email: userLogin.email, uid: userLogin.user.uid });

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

      return userInfo.tokens;
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

    return userInfo.tokens;
  } catch (err) {
    console.error(err);

    throw err;
  }
};

/**
 * Fetch User by email.
 *
 * @param {*} email
 * @returns {Promise}
 */
export async function fetchByEmail(email) {
  try {
    const result = await admin.auth().getUserByEmail(email);

    return result;
  } catch (err) {
    if (err.code === 'auth/user-not-found') {
      const result = {
        status: 'NOT FOUND',
      };
      return result;
    }
    console.error(err);

    throw err;
  }
}

export const createUser = (userInfo) => {
  const userRef = db.ref(`users/${userInfo.uid}`);

  return userRef.set({
    name: userInfo.name,
    email: userInfo.email,
    resume: '',
  });
};
