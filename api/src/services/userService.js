import Boom from '@hapi/boom';
const { firebase, admin } = require('../utils/firebaseConfig');

/**
 * Login user into firebase with google Id token and return firebase token if success.
 *
 * @param {Object} data
 * @returns {Promise}
 */
export async function loginUser(data) {
  try {
    const { idToken, email } = data;

    const credential = firebase.auth.GoogleAuthProvider.credential(idToken);

    const userLogin = await firebase.auth().signInWithCredential(credential);

    const token = userLogin.user.getIdToken();

    const userInfo = {
      user: {
        name: userLogin.user.displayName,
        email: userLogin.user.email,
      },
      token: token,
    };

    return userInfo;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

export async function fetchByEmail(email) {
  try {
    const result = await admin.auth().getUserByEmail(email);

    if (!result) {
      throw new Boom.notFound('User not registered');
    }

    return result;
  } catch (err) {
    console.error(err);

    throw err;
  }
}
