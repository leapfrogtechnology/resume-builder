import axios from 'axios';
import urlConstants from '~/constant/urlConstants';
import textConstants from '~/constant/textConstants';
import * as localStorage from '~/storage/LocalStorage';

const http = axios.create({
  baseURL: urlConstants.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (
      error.response.status === textConstants.UNAUTHORIZED_CODE &&
      error.response.data.error &&
      error.response.data.error.message === textConstants.ACCESS_TOKEN_EXPIRE
    ) {
      const refreshToken = localStorage.getRefreshToken();

      return http.post(urlConstants.refreshTokenUrl, { authorization: `Bearer ${refreshToken}` }).then(({ data }) => {
        const accessToken = data.accessToken;

        localStorage.saveAccessToken(accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return http(originalRequest);
      });
    } else if (
      error.response.status === textConstants.UNAUTHORIZED_CODE &&
      error.response.data.error &&
      (error.response.data.error.message === textConstants.REFRESH_TOKEN_EXPIRE || textConstants.TOKEN_NOT_FOUND)
    ) {
      error.response.data.error.message = textConstants.SESSION_EXPIRED;
    }

    return Promise.reject(error);
  }
);

http.interceptors.request.use(
  config => {
    const accessToken = localStorage.getAccessToken() || null;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default http;
