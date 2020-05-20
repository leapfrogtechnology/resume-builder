import axios from 'axios';

import { ACCESS_TOKEN } from '~/constant/storage';
import textConstants from '~/constant/textConstants';
import * as localStorage from '~/storage/LocalStorage';

/**
 * Http Get.
 *
 * @param {*} url
 * @param {*} [params={}]
 * @returns {Promise}
 */
export function get(url, params = {}) {
  const request = {
    method: 'get',
    url: url,
    params: params,
  };

  return axios(request);
}

/**
 * Http POST.
 *
 * @param {*} url
 * @param {*} data
 * @returns  {Promise}
 */
export function post(url, data) {
  const request = {
    method: 'post',
    url: url,
    data: data,
  };

  return axios(request);
}

/**
 * Http Put.
 *
 * @param {*} url
 * @param {*} data
 * @returns {Promise}
 */
export function put(url, data) {
  const request = {
    method: 'put',
    url: url,
    data: data,
  };

  return axios(request);
}

/**
 * Http Delete.
 *
 * @param {*} url
 * @param {*} [data={}]
 * @returns {Promise}
 */
export function remove(url, data = {}) {
  const request = {
    method: 'delete',
    data,
    url,
  };

  return axios(request);
}

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.response.status === textConstants.UNAUTHORIZED_CODE &&
      error.response.data.error.message === textConstants.ACCESS_TOKEN_EXPIRE
    ) {
      localStorage.logout();
    }

    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  config => {
    const accessToken = localStorage.getAccessToken(ACCESS_TOKEN) || null;

    if (accessToken !== null || accessToken !== undefined) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
