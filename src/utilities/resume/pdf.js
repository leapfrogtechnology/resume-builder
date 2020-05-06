import { useState, useContext } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { ProfileImage } from '~/assets/image';
import { FormContext } from '../../components/FormContext';

// Create styles for overall page
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    margin: '60px 32px',
  },
});

// Create styles for personal information section
const personalInformationStyles = StyleSheet.create({
  personalInformation: {
    display: 'flex',
    flexDirection: 'row',
  },

  left: {
    marginRight: 20,
  },

  profileImageWrapper: {
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  profileDetail: {
    display: 'inline-block',
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileStatus: {
    fontWeight: 'normal',
    fontSize: 12 || 14,
  },
  content: {
    marginTop: 24,
  },
  contentRight: {
    fontWeight: 'normal',
    fontSize: 12 || 14,
  },
  contentLeft: {
    width: 50,
    fontSize: 12 || 14,
    fontWeight: 'bold',
    marginRight: 20,
  },
  row: {
    display: 'block',
    fontSize: 12,
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'row',
  },
});

// Create Document Component
const MyDocument = resumeJson => {
  //This data shall be removed later
  const contactsList = [{ label: 'Email', value: 'nikitashrestha@lftechnology.com' }];
  const name = 'Nikita Shrestha';
  const role = { label: 'Asociate Software Engineer', hidden: false };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PersonalInformation name={name} role={role} contactsList={contactsList}></PersonalInformation>
      </Page>
    </Document>
  );
};

/**
 * Create personal info section.
 *
 * @param {string} name Name of resumee holder.
 * @param {object} role Role of resume holder.
 * @param {Array} contactsList List of contacts having hidden = false.
 */
const PersonalInformation = ({ name, role, contactsList }) => {
  return (
    <View style={personalInformationStyles.personalInformation}>
      <View style={personalInformationStyles.left}>
        <View style={personalInformationStyles.profileImageWrapper}>
          <Image src={ProfileImage} alt="Image"></Image>
        </View>
      </View>
      <View style={personalInformationStyles.right}>
        <View>
          <View>
            <Text style={[personalInformationStyles.profileName]}>{name}</Text>
          </View>
          {role && !role.hidden && (
            <View>
              <Text style={personalInformationStyles.profileStatus}>{role.label}</Text>
            </View>
          )}
        </View>
        <View style={personalInformationStyles.content}>
          <View style={personalInformationStyles.row}>
            {contactsList.map((contact, index) => (
              <PersonalInformationItem label={contact.label} value={contact.value} key={index} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const PersonalInformationItem = ({ label, value }) => {
  return (
    <View style={personalInformationStyles.rowItem}>
      <Text style={personalInformationStyles.contentLeft}>{label}</Text>
      <Text style={personalInformationStyles.contentRight}>{value}</Text>
    </View>
  );
};

export default MyDocument;
