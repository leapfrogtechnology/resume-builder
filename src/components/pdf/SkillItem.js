import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create a single skill Item.
 */
const SkillItem = ({ label, list }) => {
  return (
    <View style={pdfStyles.skills.content}>
      <Text>{`${label} `}</Text>
      <SubSkillItem subSkills={list} />
    </View>
  );
};

const SubSkillItem = ({ subSkills }) => {
  if (subSkills.length < 1) {
    return (
      <>
        <Text>{' , '}</Text>
      </>
    );
  } else {
    const filteredResult = subSkills
      .filter(({ name }) => {
        return name !== '';
      })
      .map(value => value.name)
      .join()
      .trim();

    if (!filteredResult) {
      return (
        <>
          <Text>{' , '}</Text>
        </>
      );
    } else {
      return <Text>{`( ${filteredResult} ), `}</Text>;
    }
  }
};

SkillItem.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
};

SubSkillItem.propTypes = {
  subSkills: PropTypes.array,
};

export default SkillItem;
