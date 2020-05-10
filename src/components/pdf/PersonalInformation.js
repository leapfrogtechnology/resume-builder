import React from 'react';
import PropTypes from 'prop-types';
import { ProfileImage } from '~/assets/image';
import { Text, View, Image } from '@react-pdf/renderer';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create personal info section.
 */
const PersonalInformation = ({ name, role, introduction, profileImg, contacts }) => {
  const contactItems = contacts.map((contact, index) => (
    <PersonalInformationItem key={index} label={contact.type} value={contact.value} />
  ));

  return (
    <View>
      <View style={pdfStyles.personalInformationStyles.personalInformation}>
        <View style={pdfStyles.personalInformationStyles.left}>
          <View style={pdfStyles.personalInformationStyles.profileImageWrapper}>
            <Image
              style={pdfStyles.personalInformationStyles.profileImage}
              src={profileImg && !profileImg.deleted ? profileImg.value : ProfileImage}
              alt="Image"
            ></Image>
          </View>
        </View>
        <View>
          <View>
            <Text style={pdfStyles.personalInformationStyles.profileName}>{name}</Text>
            {role && !role.hidden && (
              <Text style={pdfStyles.personalInformationStyles.profileStatus}>{role.label}</Text>
            )}
          </View>
          <View style={pdfStyles.personalInformationStyles.content}>
            <View style={pdfStyles.personalInformationStyles.contentRow}>{contactItems}</View>
            {introduction && !introduction.hidden && (
              <View style={pdfStyles.personalInformationStyles.contentRow}>
                <View style={pdfStyles.personalInformationStyles.paragraph}>
                  <Text>{introduction.value}</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const PersonalInformationItem = ({ label, value }) => {
  return (
    <View style={pdfStyles.personalInformationStyles.contentRowItem}>
      <Text style={pdfStyles.personalInformationStyles.contentLeft}>{label}</Text>
      <Text style={pdfStyles.personalInformationStyles.contentRight}>{value}</Text>
    </View>
  );
};

PersonalInformation.propTypes = {
  name: PropTypes.string,
  role: PropTypes.object,
  introduction: PropTypes.object,
  profileImg: PropTypes.string,
  contacts: PropTypes.array,
};

PersonalInformationItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default PersonalInformation;
