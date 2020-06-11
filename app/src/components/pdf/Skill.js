import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import SkillItem from '~/components/pdf/SkillItem';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create skills section
 */
const Skills = ({ heading, data }) => {
  const skillsItem = data.map(({ label, subSkills }, index) => (
    <SkillItem key={index} label={label} list={subSkills} isLast={index === data.length - 1 ? true : false}></SkillItem>
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.skills.paragraph}>{skillsItem}</View>
    </View>
  );
};

Skills.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.array,
};

export default Skills;
