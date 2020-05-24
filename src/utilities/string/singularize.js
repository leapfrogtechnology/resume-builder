export const singularize = s => {
  return s[s.length - 1] === 's' ? s.slice(0, -1) : s;
};
