import { camelCase } from "common/constants";

export const camelToTitle = (s) => {
  return s.replace(camelCase, `$1 $2`);
};

export const singularize = (s) => {
  return s[s.length - 1] === "s" ? s.slice(0, -1) : s;
};

export const transformKey = (key) => {
  return key === "projects" ? `${key} Undertaken` : camelToTitle(key);
};
