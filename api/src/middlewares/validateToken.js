import Boom from '@hapi/boom';

import * as CONSTANT from '../constant';
import * as sessionService from '../services/sessionService';

const validateRefreshToken = (req, res, next) => {
  req.token = req.body.authorization.substring(CONSTANT.BEARER_LENGTH);

  sessionService
    .getSession(req.token)
    .then((data) => {
      if (!data) {
        throw new Boom.notFound('Token not found');
      }
      next();
    })
    .catch((err) => next(err));
};

export default validateRefreshToken;
