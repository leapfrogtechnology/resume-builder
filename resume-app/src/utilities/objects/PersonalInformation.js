export const getPersonalInfoObject = ({ name, role, introduction }) => {
  return {
    name: name,
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
