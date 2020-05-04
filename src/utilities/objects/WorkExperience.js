export const getWorkExperienceObject = ({
  nameOrganization,
  position,
  startDate,
  endDate,
  currentWork,
  roles,
  achievements,
  nameReferee,
  contactReferee,
}) => {
  return {
    name: nameOrganization,
    position: position,
    startDate: startDate,
    endDate: endDate,
    currentlyWorking: currentWork,
    responsibilities: roles,
    achievements: achievements,
    refereeName: nameReferee,
    refereeContact: contactReferee,
    hidden: false,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
