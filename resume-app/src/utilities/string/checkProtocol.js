import { protocolRegEx, http } from "common/constants";

/**
 * Ensure https protocol exist in link.
 *
 * @param {string} url
 */
export const ensureHasProtocol = (url) => {
  if (!protocolRegEx.test(url)) return http + url;

  return url;
};
