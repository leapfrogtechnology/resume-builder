export const camelToTitle = s => {
  return s.replace(/([A-Z]+)*([A-Z][a-z])/g, `$1 $2`);
};

export const singularize = s => {
  return s[s.length - 1] === 's' ? s.slice(0, -1) : s;
};

export const transformKey = key => {
  return key === 'projects' ? `${key} Undertaken` : camelToTitle(key);
};
