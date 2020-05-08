import { Text, View } from '@react-pdf/renderer';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create certificate section.
 *
 * @param {string} heading Header to show.
 * @param {Array} data Array of certificate object.
 */
const Certificate = ({ heading, data }) => {
  const certificateItems = data.map(({ name, link, date, description }, index) => (
    <CertificateItem key={index} title={name} link={link} date={date} description={description} />
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.styles.contentBlock}>{certificateItems}</View>
    </View>
  );
};

const CertificateItem = ({ title, link, date, description }) => {
  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text style={pdfStyles.styles.contentSubHeader}>{title}</Text>
      <Text>{link}</Text>
      <Text>{moment(date).format('MMMM YYYY')}</Text>
      {description ? <Text>{description}</Text> : <></>}
    </View>
  );
};

export default Certificate;
