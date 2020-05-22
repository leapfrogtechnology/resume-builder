import * as httpUtils from '~/utilities/httpUtils';
import urlConstants from '~/constant/urlConstants';

export const validateUser = data => {
  const { googleLoginUrl } = urlConstants;

  return new Promise(resolve => {
    const result = httpUtils.post(googleLoginUrl, data);

    resolve(result);
  });
};

export const saveResume = data => {
  const { saveResumeUrl } = urlConstants;

  return new Promise(resolve => {
    const result = httpUtils.post(saveResumeUrl, data);

    resolve(result);
  });
};

export const fetchResume = async email => {
  const fetchResumeUrl = urlConstants.apiBaseUrl + urlConstants.fetchResumeUrl + email;

  const result = await httpUtils.get(fetchResumeUrl, {});

  return result.data;
};

export const deleteResume = data => {
  const deleteResumeUrl = urlConstants.apiBaseUrl + urlConstants.deleteResumeUrl;

  return new Promise(resolve => {
    const result = httpUtils.remove(deleteResumeUrl, data);

    resolve(result);
  });
};
