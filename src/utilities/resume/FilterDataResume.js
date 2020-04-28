export const getFilteredResume = data => {
  const filteredResume = {};

  Object.keys(data).forEach((value, index) => {
    switch (value) {
      case 'role':
        if (!data[value].hidden) {
          filteredResume[value] = data[value];
        }
      case 'introduction':
        if (!data[value].hidden) {
          filteredResume[value] = data[value];
        }
      case 'email' || 'phone' || 'linkedIn' || 'github':
        if (!data[value].hidden) {
          filteredResume[value] = data[value];
        }
      case 'achievements':
        filteredResume['achievements'] = [];
        data['achievements'].forEach((achievement, index) => {
          if (!achievement.hidden) {
            filteredResume['achievements'].push(achievement);
          }
        });
      case 'skills':
        filteredResume['skills'] = [];
        data['skills'].forEach((skill, index) => {
          if (!skill.hidden) {
            filteredResume['skills'].push(skill);
          }
        });
      case 'workExperience':
        filteredResume['workExperience'] = [];
        data['workExperience'].forEach((work, index) => {
          if (!work.hidden) {
            filteredResume['workExperience'].push(work);
          }
        });
      case 'certificates':
        filteredResume['certificates'] = [];
        data['certificates'].forEach((certificate, index) => {
          if (!certificate.hidden) {
            filteredResume['certificates'].push(certificate);
          }
        });
      case 'projects':
        filteredResume['projects'] = [];
        data['projects'].forEach((project, index) => {
          if (!project.hidden) {
            filteredResume['projects'].push(project);
          }
        });
    }
  });
};
