export const camelToTitle = s => {
  return s.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2');
};
