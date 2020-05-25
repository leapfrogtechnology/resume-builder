import { RESUME, USER, ACCESS_TOKEN, REFRESH_TOKEN } from '~/constant/storage';

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

export const saveUser = (name, email) => {
  localStorage.setItem(USER, JSON.stringify({ name: name, email: email }));
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export const saveAccessToken = token => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const saveRefreshToken = token => {
  return localStorage.setItem(REFRESH_TOKEN, token);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};

/**
 * Logout User and Remove Data from Browser Storage.
 *
 */
export function logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(USER);
}
