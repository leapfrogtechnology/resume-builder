export const getPersonalInfoObject = ({ name, role, introduction }) => {
  return {
    name: {
      value: name,
      hidden: false,
    },
    role: {
      name: role,
      label: role,
      hidden: false,
    },
    introduction: {
      hidden: false,
      value: introduction,
    },
  };
};
