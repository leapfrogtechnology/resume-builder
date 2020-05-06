import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { ProfileImage } from '~/assets/image';

// Font.register({
//    family: 'Arial', 
//    fonts: [
//     {
//       src: '../../../assets/fonts/arial.ttf',
//     }
//   ]
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    margin: '20px 32px',
    fontSize: 10,
    lineHeight: 1.5,
  },
  personalInformation: {
    display: 'flex',
    color: 'black'
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
  resumeContentBlock: {
    marginTop: '34px',
  },
  contentHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentSubHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4
  },
  paragraph: {
    marginTop: '12px',
    width: '90%',
    textAlign: 'justify'
  },
});

const personalInformationStyles = StyleSheet.create({
  personalInformation: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    marginRight: '20px',
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
    fontSize: 22,
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
    fontSize: 10 || 12,
  },
  contentLeft: {
    width: 50,
    fontSize: 10 || 12,
    fontWeight: '500',
    marginRight: 20,
  },
  contentRow: {
    fontSize: 10,
  },
  contentRowItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentBlock: {
    marginTop: '15px'
  },
  paragraph: {
    marginTop: '12px',
    width: '75%',
    textAlign: 'justify'
  }
});

const workExpStyles = StyleSheet.create({
  list: {
    display: 'list-item',
    paddingLeft: '4px'
  }
})

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PersonalInformation></PersonalInformation>
      <Skills></Skills>
      <WorkExperience></WorkExperience>
      <ProjectUndertaken></ProjectUndertaken>
      <Achievement></Achievement>
      <Certificate></Certificate>
    </Page>
  </Document>
);

const PersonalInformation = () => {
  return (
    <View style={styles.resumeContentBlock}>
      <View style={personalInformationStyles.personalInformation}>
        <View style={personalInformationStyles.left}>
          <View style={personalInformationStyles.profileImageWrapper}>
           <Image src={ProfileImage} alt="Image"></Image>
          </View>
       </View>
        <View>
          <View>
            <Text style={personalInformationStyles.profileName}>ergt</Text>
            <Text style={personalInformationStyles.profileStatus}>Role</Text>
          </View>
          <View style={personalInformationStyles.content}>
            <View style={personalInformationStyles.contentRow}>
              <PersonalInformationItem label="Email" value="nikitashresth@lftechnology.com"></PersonalInformationItem>
              <PersonalInformationItem label="Phone" value="nikitashresth@lftechnology.com"></PersonalInformationItem>
              <PersonalInformationItem label="Github" value="nikitashresth@lftechnology.com"></PersonalInformationItem>
              <PersonalInformationItem label="Linkedin" value="nikitashresth@lftechnology.com"></PersonalInformationItem>
            </View>
            <View style={personalInformationStyles.contentRow}>
              <View style={personalInformationStyles.paragraph}>
                <Text>Roles and Responsibilities Roles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and ResponsibilitiesRoles and Responsibilities </Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Skills = () => {
  return(
    <View style={styles.resumeContentBlock}>
      <View>
        <Text style={styles.contentHeader}>Skills</Text>
        <View style={styles.paragraph}>
          <Text >PHP (Zend, Laravel, CI), Python (Django, Flash Alembic), Javascript (ReactJS, ReactNative)</Text>
        </View>
      </View>
    </View>
  )
}

const WorkExperience = () => {
  return(
    <View style={styles.resumeContentBlock}>
      <View>
        <Text style={styles.contentHeader}>Work Experience(5 years)</Text>
          <View style={styles.contentBlock}>
            <View style={styles.paragraph}>
              <Text style={styles.contentSubHeader}>Hewlett Packard Enterprise</Text>
              <Text>Associate Engineering Manager</Text>
              <Text>September 2016 - August 2019 (3 years 3 months)</Text>
            </View>
            <View style={styles.paragraph}>
              <Text>Roles and Responsibilities</Text>
              <View>
                <Text style={workExpStyles.list}>My Roles and Responsibilities</Text>
                <Text style={workExpStyles.list}>My Roles and Responsibilities</Text>
                <Text style={workExpStyles.list}>My Roles and Responsibilities</Text>
              </View>
            </View>
            <View style={styles.paragraph}>
              <Text>Achievements</Text>
              <View>
                <Text style={workExpStyles.list}>Achievements</Text>
                <Text style={workExpStyles.list}>Achievements</Text>
                <Text style={workExpStyles.list}>Achievements</Text>
              </View>
            </View>
            <View style={styles.paragraph}>
              <Text>Referee Mr. Andre Pistaolova (andree.p@hpe.com)</Text>
            </View>
          </View>
      </View>
    </View>
  )
}

const ProjectUndertaken = () => {
   return(
    <View style={styles.resumeContentBlock}>
      <View>
        <Text style={styles.contentHeader}>Projects Undertaken</Text>
          <View style={styles.contentBlock}>
            <View style={styles.paragraph}>
              <Text style={styles.contentSubHeader}>AI Thoughtbot</Text>
              <Text>May 2019 - June 2019 (1 month)</Text>
              <Text>I built an aI thoughtbot that gave relationship advice to couples in distress.</Text>
            </View>
          </View>
      </View>
    </View>
  )
}

const Achievement = () => {
   return(
    <View style={styles.resumeContentBlock}>
      <View>
        <Text style={styles.contentHeader}>Achievements</Text>
          <View style={styles.contentBlock}>
            <View style={styles.paragraph}>
              <Text style={styles.contentSubHeader}>Headhunt Award</Text>
              <Text>December 2017</Text>
              <Text>I built an aI thoughtbot that gave relationship advice to couples in distress.</Text>
            </View>
          </View>
      </View>
    </View>
  )
}

const Certificate = () => {
   return(
    <View style={styles.resumeContentBlock} >
      <View>
        <Text style={styles.contentHeader}>Certificates</Text>
          <View style={styles.contentBlock}>
            <View style={styles.paragraph}>
              <Text style={styles.contentSubHeader}>Coursera - Advanced React</Text>
              <Text>https://courseera.com/ribbtys-react-course-info/</Text>
              <Text>December 2018</Text>
              <Text>Advanced react course completed with React under the hood</Text>
            </View>
          </View>
      </View>
    </View>
  )
}

const PersonalInformationItem = ({ label, value }) => {
  return (
    <View style={personalInformationStyles.contentRowItem}>
      <Text style={personalInformationStyles.contentLeft}>{label}</Text>
      <Text style={personalInformationStyles.contentRight}>{value}</Text>
    </View>
  );
};

export default MyDocument;
