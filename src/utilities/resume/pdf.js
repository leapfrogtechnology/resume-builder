import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { ProfileImage } from '~/assets/image';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    margin: '60px 32px',
  },
  personalInformation: {
    display: 'flex',
  },
  infoLeft: {
    marginRight: '20px',
  },
  infoRight: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImageWrapper: {
    marginRight: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
});

const personalInformationStyles = StyleSheet.create({
  personalInformation: {
    display: ' -webkit-flex' /* Safari */,
    display: 'flex',
  },
  left: {
    marginRight: '20px',
    flex: 1,
  },
  right: {
    flex: 1,
  },
  profileImageWrapper: {
    marginRight: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  profileDetail: {
    display: 'block',
  },
  profileName: {
    // fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileStatus: {
    fontStyle: 'normal',
    fontSize: 12,
  },
  content: {
    marginTop: '24px',
  },
  contentRight: {
    // fontStyle: 'normal',
    // // fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 'normal',
  },
  contentLeft: {
    width: '50px',
    // fontStyle: 'normal',
    // // fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: '20px',
  },
  row: {
    display: 'block',
    // fontStyle: 'normal',
    fontSize: 12,
  },
  rowItem: {
    display: 'flex',
    // textAlign: '-webkit-match-parent',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PersonalInformation></PersonalInformation>
    </Page>
  </Document>
);

const PersonalInformation = () => {
  return (
    <View style={personalInformationStyles.personalInformation}>
      <View style={personalInformationStyles.left}>
        <View style={personalInformationStyles.profileImageWrapper}>
          <Image src={ProfileImage} alt="Image"></Image>
        </View>
      </View>
      <View>
        <View>
          <Text>ergt</Text>
        </View>
        <View style={personalInformationStyles.content}>
          <View style={personalInformationStyles.row}>
            <PersonalInformationItem label="Email" value="nikitashresth@lftechnology.com"></PersonalInformationItem>
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
