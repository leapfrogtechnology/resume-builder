export const getAchievementObject = ({ name, date, description }) => {
  return {
    name: name,
    date: date,
    description: description,
    hidden: false,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
