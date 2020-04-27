export const getSkillObject = (skill, subSkills) => {
  console.log('here');
  const subSkillsList = [];
  subSkills.split(',').forEach(subSkill => {
    console.log(subSkill);
    subSkillsList.push({
      name: subSkill,
      label: subSkill,
    });
  });

  return {
    name: skill,
    label: skill,
    hidden: false,
    isDeleted: 'false',
    deletedOn: '1970-01-01T00:00:00.000Z',
    subSkills: subSkillsList,
  };
};
