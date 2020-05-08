import { Text, View } from '@react-pdf/renderer';
import * as dateUtils from '~/utilities/date/FormatDate';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';
import WorkExperienceItem from '~/components/pdf/WorkExperienceItem';

/**
 * Create work experience section.
 *
 * @param {string} heading Header to show.
 * @param {object} experience Overall experience of resumee holder.
 * @param {Array} data Array of workExperience object.
 */
const WorkExperience = ({ heading, experience, data }) => {
  let experienceLabel = '';

  //Create label to show overall work experience.
  if (experience) {
    const experienceInYearAndMonth = dateUtils.getExperienceFormat(experience);

    experienceLabel = dateUtils.getExperienceLabel(experienceInYearAndMonth);
  }

  experienceLabel = experienceLabel ? `( ${experienceLabel} )` : '';

  const workExperiences = data.map((value, index) => (
    <WorkExperienceItem key={index} workExperience={value}></WorkExperienceItem>
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{`${heading} ${experienceLabel}`}</Text>
      {workExperiences}
    </View>
  );
};

export default WorkExperience;
