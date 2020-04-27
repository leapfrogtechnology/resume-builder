export const getWorkExperienceObject = ({
  name,
  position,
  startDate,
  endDate,
  currentlyWorking,
  roles,
  achievements,
  nameReferee,
  contactReferee,
}) => {
  return {
    name: name,
    position: position,
    startDate: startDate,
    endDate: endDate,
    currentlyWorking: currentlyWorking,
    responsibilities: roles,
    achievements: achievements,
    refereeName: nameReferee,
    refereeContact: contactReferee,
    hidden: true,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
