import axios from 'axios';

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
