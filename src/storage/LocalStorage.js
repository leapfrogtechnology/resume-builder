export const getResume = () => {
  return JSON.parse(localStorage.getItem('resume'));
};

export const saveResume = resume => {
  localStorage.setItem('resume', JSON.stringify(resume));
};

export const deleteResume = () => {
  localStorage.clear();
};
