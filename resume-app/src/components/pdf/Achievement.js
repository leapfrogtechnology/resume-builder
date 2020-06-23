import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "@react-pdf/renderer";
import { format } from "utilities/date/FormatDate";
import * as pdfStyles from "components/pdf/pdf.styles.js";

/**
 * Create achievements section.
 */
const Achievement = ({ heading, data }) => {
  const achievementItems = data.map(({ name, date, description }, index) => (
    <AchievementItem
      key={index}
      title={name}
      date={date}
      description={description}
    />
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.styles.contentBlock}>{achievementItems}</View>
    </View>
  );
};

const AchievementItem = ({ title, date, description }) => {
  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text style={pdfStyles.styles.contentSubHeader}>{title}</Text>
      <Text>{format(date)}</Text>
      {description ? <Text>{description}</Text> : <></>}
    </View>
  );
};

Achievement.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.array,
};

AchievementItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default Achievement;
