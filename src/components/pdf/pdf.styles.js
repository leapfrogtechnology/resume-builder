import { StyleSheet, Font } from '@react-pdf/renderer';

// Register font used here.
Font.register({
  family: 'Arial',
  fonts: [
    {
      src: '~/assets/fonts/arial.ttf',
    },
  ],
});

// Create styles for overall template.
export const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    margin: '60px 56px 40px 40px',
    fontSize: 10,
    lineHeight: 1.5,
  },
  personalInformation: {
    display: 'flex',
    color: 'black',
  },
  infoLeft: {
    marginRight: 20,
  },
  infoRight: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImageWrapper: {
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  resumeContentBlock: {
    marginTop: 34,
  },
  contentHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentSubHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  paragraph: {
    marginTop: 12,
    width: '90%',
    textAlign: 'justify',
  },
});

// Create styles for personal information section
export const personalInformationStyles = StyleSheet.create({
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
    marginTop: 15,
  },
  paragraph: {
    marginTop: 12,
    width: '75%',
    textAlign: 'justify',
  },
});

// Create styles for workExperience section.
export const workExpStyles = StyleSheet.create({
  list: {
    display: 'list-item',
    paddingLeft: 4,
  },
});

// Create styles for skills section.
export const skills = StyleSheet.create({
  paragraph: {
    width: '75%',
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    fontSize: 12,
  },
});
