import { v4 } from 'uuid';

export const getAchievementObject = ({ name, date, description }) => {
  return {
    id: v4(),
    name: name,
    date: date,
    description: description,
    hidden: false,
    isDeleted: false,
    deletedOn: null,
  };
};
