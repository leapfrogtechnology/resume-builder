import { Text, View } from '@react-pdf/renderer';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create achievements section.
 *
 * @param {string} heading Heading to show.
 * @param {Array} data Array of achievement object.
 */
const Achievement = ({ heading, data }) => {
  const achievementItems = data.map(({ name, date, description }, index) => (
    <AchievementItem key={index} title={name} date={date} description={description} />
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
      <Text>{moment(date).format('MMMM YYYY')}</Text>
      {description ? <Text>{description}</Text> : <></>}
    </View>
  );
};

export default Achievement;
