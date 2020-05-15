import Boom from '@hapi/boom';

import { firebaseApp } from './../index';

/**
 * Check the database to see if user exists and if exists, return token.
 *
 * @param {Object} data
 * @returns {Promise}
 */
export async function loginUser(data) {
  try {
    const { id, idToken, name, email } = data;

    const credential = firebaseApp.auth.GoogleAuthProvider.credential(idToken);

    const result = await firebaseApp.auth().signInWithCredential(credential);
    return result;
  } catch (err) {
    console.error(err);

    throw err;
  }
}
