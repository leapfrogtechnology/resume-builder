export const getResume = storage => {
  return JSON.parse(storage.getItem('resume'));
};

export const saveResume = (storage, resume) => {
  storage.setItem('resume', JSON.stringify(resume));
};

export const deleteResume = storage => {
  storage.clear();
};
