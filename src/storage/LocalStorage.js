import { RESUME } from '~/constant/storage.js';

export const getResume = () => {
  return JSON.parse(localStorage.getItem(RESUME));
};

export const saveResume = resume => {
  localStorage.setItem(RESUME, JSON.stringify(resume));
};

export const deleteResume = () => {
  localStorage.clear();
};
