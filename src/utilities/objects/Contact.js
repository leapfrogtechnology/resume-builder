export const getContactObject = ({ email, phone, gitHub, stackOverFlow, linkedIn }) => {
  return {
    email: { value: email, hidden: false },
    phone: { value: phone, hidden: false },
    github: { value: gitHub, hidden: false },
    stackOverflow: { value: stackOverFlow, hidden: false },
    linkedIn: { value: linkedIn, hidden: false },
  };
};
