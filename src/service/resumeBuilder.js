import * as httpUtils from '~/utilities/httpUtils';
import urlConstants from '~/constant/urlConstants';

export const validateUser = data => {
  const { googleLoginUrl } = urlConstants;

  return new Promise(resolve => {
    const result = httpUtils.post(googleLoginUrl, data);

    resolve(result);
  });
};
