import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Arial',
  src: 'https://fonts.google.com/?query=Arial',
});

// Register hyphenation callback.
// In this example, we enable words to break in half.
Font.registerHyphenationCallback(word => {
  const middle = Math.floor(word.length / 2);
  const parts = word.length === 1 ? [word] : [word.substr(0, middle), word.substr(middle)];

  return parts;
});

export const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    paddingTop: 60,
    paddingBottom: 50,
    paddingHorizontal: 40,
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
    textAlign: 'justify',
  },
});

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
    overflow: 'hidden',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
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
    width: '80%',
    textAlign: 'justify',
  },
});

export const workExpStyles = StyleSheet.create({
  list: {
    display: 'list-item',
    paddingLeft: 4,
  },
});

export const skills = StyleSheet.create({
  paragraph: {
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    fontSize: 12,
  },
});
