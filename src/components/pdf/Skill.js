import { Text, View } from '@react-pdf/renderer';
import SkillItem from '~/components/pdf/SkillItem';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create skills section
 *
 * @param {string} heading Header to show.
 * @param {Array} data Array of Skill object.
 */
const Skills = ({ heading, data }) => {
  const skillsItem = data.map(({ label, subSkills }, index) => (
    <SkillItem key={index} label={label} list={subSkills}></SkillItem>
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.skills.paragraph}>{skillsItem}</View>
    </View>
  );
};

export default Skills;
