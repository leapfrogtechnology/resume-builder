export const getSkillObject = ({ skill, subSkills }) => {
  const subSkillsList = [];

  subSkills.split(',').forEach(subSkill => {
    subSkillsList.push(subSkill);
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
