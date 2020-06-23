import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "@react-pdf/renderer";
import { capitalize } from "utilities/string/capitalize";
import * as pdfStyles from "components/pdf/pdf.styles.js";

/**
 * Create a single skill Item.
 */
const SkillItem = ({ label, list, isLast }) => {
  return (
    <View style={pdfStyles.skills.content}>
      <Text>{`${capitalize(label)} `}</Text>
      <SubSkillItem subSkills={list} isLast={isLast} />
    </View>
  );
};

const SubSkillItem = ({ subSkills, isLast }) => {
  if (subSkills.length < 1) {
    return <Text>{!isLast ? " , " : ""}</Text>;
  } else {
    const filteredResult = subSkills
      .filter(({ name }) => {
        return name !== "";
      })
      .map((value) => capitalize(value.name))
      .join(", ")
      .trim();

    if (!filteredResult) {
      return <Text>{!isLast ? " , " : ""}</Text>;
    } else {
      return (
        <Text>{!isLast ? `(${filteredResult}), ` : `(${filteredResult})`}</Text>
      );
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
