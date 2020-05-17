import { RESUME, USER, ACCESS_TOKEN } from '~/constant/storage.js';

export const getResume = () => {
  return JSON.parse(localStorage.getItem(RESUME));
};

export const saveResume = resume => {
  localStorage.setItem(RESUME, JSON.stringify(resume));
};

export const deleteResume = () => {
  localStorage.clear();
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER));
};

export const saveUser = user => {
  localStorage.setItem(USER, JSON.stringify(user));
};

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN));
};

export const saveAccessToken = token => {
  return localStorage.setItem(ACCESS_TOKEN, token);
};

/**
 * Logout User and Remove Data from Browser Storage.
 *
 */
export function logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(USER);
  window.location.href = routeConstants.LOGIN;
}
