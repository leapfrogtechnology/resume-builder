const env = require('./../env');
const firebase = require('firebase');
const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

var serviceAccount = {
  type: process.env.FIREBASE_ADMIN_SDK_TYPE,
  project_id: process.env.FIREBASE_ADMIN_SDK_PROJECT_ID,
  private_key_id: process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_ADMIN_SDK_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_ADMIN_SDK_CLIENT_ID,
  auth_uri: process.env.FIREBASE_ADMIN_SDK_AUTH_URI,
  token_uri: process.env.FIREBASE_ADMIN_SDK_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_SDK_AUTH_PROVIDER,
  client_x509_cert_url: process.env.FIREBASE_ADMIN_SDK_CLIENT_CERT_URL,
};

firebase.initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

module.exports = { firebase, admin };
