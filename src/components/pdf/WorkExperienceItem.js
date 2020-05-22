import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';

import List from '~/components/pdf/List';
import * as dateUtils from '~/utilities/date/FormatDate';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create a single work experience section.
 */
const WorkExperienceItem = ({ workExperience }) => {
  const labelForDate = dateUtils.getEngagementTenure(
    workExperience.startDate,
    workExperience.endDate,
    workExperience.currentlyWorking
  );

  const roles = workExperience.responsibilities.split('.').filter(role => role.trim() !== '');
  const achievements = workExperience.achievements.split('.').filter(achievement => achievement.trim() !== '');

  const refereeName = workExperience.refereeName;
  const refereeContact = workExperience.refereeContact;

  return (
    <View style={pdfStyles.styles.contentBlock}>
      <View style={pdfStyles.styles.paragraph}>
        <Text style={pdfStyles.styles.contentSubHeader}>{workExperience.name}</Text>
        <Text>{workExperience.position}</Text>
        <Text>{labelForDate}</Text>
      </View>
      <List title="Roles and Responsibilities" items={roles} />
      <List title="Achievements" items={achievements} />
      <RefereeSection name={refereeName} contact={refereeContact} />
    </View>
  );
};

const RefereeSection = ({ name, contact }) => {
  if (!name || !contact) {
    return <></>;
  }

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text>Referee</Text>
      <Text>{`${name} ( ${contact} )`}</Text>
    </View>
  );
};

WorkExperienceItem.propTypes = {
  workExperience: PropTypes.object,
};

RefereeSection.propTypes = {
  name: PropTypes.string,
  contact: PropTypes.string,
};

export default WorkExperienceItem;
