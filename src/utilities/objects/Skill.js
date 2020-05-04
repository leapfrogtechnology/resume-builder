export const getSkillObject = ({ skill, subSkills }) => {
  const subSkillsList = [];

  subSkills.split(',').forEach(subSkill => {
    const result = subSkill.trim().replace(/[^a-zA-Z- ]/g, '');

    if (result !== '' || result.length > 1) {
      subSkillsList.push({ name: result, label: result });
    }
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
