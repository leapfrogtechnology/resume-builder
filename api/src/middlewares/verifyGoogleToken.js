import HttpStatus from 'http-status-codes';
import * as googleAuth from 'google-auth-library';

const OAuth2Client = new googleAuth.OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_SECRET);

const validateGoogleToken = async (req, res, next) => {
  try {
    const ticket = await OAuth2Client.verifyIdToken({ idToken: req.body.tokenId });
    const payload = ticket.getPayload();

    let data;

    if (payload) {
      data = {
        idToken: req.body.tokenId,
        email: payload.email,
      };
      req.user = data;

      return next();
    }

    return res.status(HttpStatus.UNAUTHORIZED).json({
      message: 'Unauthorized access',
    });
  } catch (err) {
    console.error(err);

    throw err;
  }
};

export default validateGoogleToken;
