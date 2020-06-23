import { ensureHasProtocol } from "utilities/string/checkProtocol";

export const getContactObject = ({
  email,
  phone,
  gitHub,
  stackOverFlow,
  linkedIn,
}) => {
  return {
    email: { value: email, hidden: false },
    phone: { value: phone, hidden: false },
    github: {
      value: gitHub ? ensureHasProtocol(gitHub) : gitHub,
      hidden: false,
    },
    stackOverflow: {
      value: stackOverFlow ? ensureHasProtocol(stackOverFlow) : stackOverFlow,
      hidden: false,
    },
    linkedIn: {
      value: linkedIn ? ensureHasProtocol(linkedIn) : linkedIn,
      hidden: false,
    },
  };
};
