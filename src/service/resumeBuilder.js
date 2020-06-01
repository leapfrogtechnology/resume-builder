import http from '~/utilities/httpUtils';
import urlConstants from '~/constant/urlConstants';

export const validateUser = data => {
  const googleLoginUrl = urlConstants.apiBaseUrl + urlConstants.googleLoginUrl;

  return new Promise(resolve => {
    const result = http.post(googleLoginUrl, data);

    resolve(result);
  });
};

export const saveResume = async data => {
  const saveResumeUrl = urlConstants.apiBaseUrl + urlConstants.saveResumeUrl;

  const result = await http.put(saveResumeUrl, data);

  return result;
};

export const fetchResume = async email => {
  const fetchResumeUrl = urlConstants.apiBaseUrl + urlConstants.fetchResumeUrl + email;

  const result = await http.get(fetchResumeUrl);

  return result;
};

export const deleteResume = (data = {}) => {
  const deleteResumeUrl = urlConstants.apiBaseUrl + urlConstants.deleteResumeUrl;

  return new Promise(resolve => {
    const result = http.delete(deleteResumeUrl, data);

    resolve(result);
  });
};

export const fetchUserProfile = async () => {
  const fetchUserProfile = urlConstants.apiBaseUrl + urlConstants.fetchUserProfileUrl;

  const result = await http.get(fetchUserProfile);

  return result.data;
};
