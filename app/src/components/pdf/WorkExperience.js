import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import { orderByDate } from '~/utilities/orderBy';
import * as dateUtils from '~/utilities/date/FormatDate';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';
import WorkExperienceItem from '~/components/pdf/WorkExperienceItem';

/**
 * Create work experience section.
 */
const WorkExperience = ({ heading, experience, data }) => {
  let experienceLabel = '';

  // Create label to show overall work experience.
  if (experience) {
    const experienceInYearAndMonth = dateUtils.getExperienceFormat(experience);

    experienceLabel =
      dateUtils.timeWithSuffix(experienceInYearAndMonth.year, 'year') +
      ' ' +
      dateUtils.timeWithSuffix(experienceInYearAndMonth.month, 'month');
  }

  experienceLabel = experienceLabel.trim() ? `( ${experienceLabel.trim()} )` : '';

  const workExperiences = orderByDate(data).map((value, index) => (
    <WorkExperienceItem key={index} workExperience={value}></WorkExperienceItem>
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{`${heading} ${experienceLabel}`}</Text>
      {workExperiences}
    </View>
  );
};

WorkExperience.propTypes = {
  heading: PropTypes.string,
  experience: PropTypes.object,
  data: PropTypes.array,
};

export default WorkExperience;
