import { Text, View } from '@react-pdf/renderer';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create a single skill Item.
 *
 * @param {string} label Name of skill.
 * @param {Array} list List of subskills.
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

export default SkillItem;
