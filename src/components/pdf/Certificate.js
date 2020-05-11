import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create certificate section.
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
      <Text>{moment(date).format('MMMM YYYY')}</Text>
      <Text>{link}</Text>
      {description ? <Text>{description}</Text> : <></>}
    </View>
  );
};

Certificate.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.array,
};

CertificateItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default Certificate;
