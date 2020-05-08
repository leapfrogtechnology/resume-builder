import moment from 'moment';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

import { ProfileImage } from '~/assets/image';
import * as dateUtils from '~/utilities/date/FormatDate';

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
const styles = StyleSheet.create({
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
const workExpStyles = StyleSheet.create({
  list: {
    display: 'list-item',
    paddingLeft: 4,
  },
});

// Create styles for skills section.
const skills = StyleSheet.create({
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

// Create Document Component
const MyDocument = ({ resumeJson }) => {
  const contactsList = [];
  const name = resumeJson.name;
  const role = resumeJson.role;
  const profileImg = resumeJson.profileImage;
  const introduction = resumeJson.introduction;
  const skills = resumeJson.skills;
  const workExperience = resumeJson.workExperience;
  const experience = resumeJson.experience;
  const projects = resumeJson.projects;
  const achievements = resumeJson.achievements;
  const certificates = resumeJson.certificates;

  if (resumeJson['email'] && !resumeJson['email'].hidden && resumeJson['email'].value) {
    contactsList.push({ type: 'Email', value: resumeJson['email'].value });
  }

  if (resumeJson['phone'] && !resumeJson['phone'].hidden && resumeJson['phone'].value) {
    contactsList.push({ type: 'Phone', value: resumeJson['phone'].value });
  }

  if (resumeJson['github'] && !resumeJson['github'].hidden && resumeJson['github'].value) {
    contactsList.push({ type: 'Github', value: resumeJson['github'].value });
  }

  if (resumeJson['linkedIn'] && !resumeJson['linkedIn'].hidden && resumeJson['linkedIn'].value) {
    contactsList.push({ type: 'LinkedIn', value: resumeJson['linkedIn'].value });
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PersonalInformation
          name={name}
          role={role}
          introduction={introduction}
          profileImg={profileImg}
          contactsList={contactsList}
        ></PersonalInformation>
        <ContentWrapper heading="Skills" data={skills} WrappedComponent={Skills} />
        <ContentWrapper
          heading="Work Experience"
          data={workExperience}
          WrappedComponent={WorkExperience}
          experience={experience}
        />
        {/* <ProjectUndertaken heading="Projects Undertaken" data={projects}></ProjectUndertaken> */}
        {/* <Achievement heading="Achievements" data={achievements}></Achievement> */}
        {/* <Certificate heading="Certificates" data={certificates}></Certificate>{' '} */}
      </Page>
    </Document>
  );
};

/**
 * HOC that renders other components
 * @param {string} heading Title to show.
 * @param {data} data Data to pass to WrappedComponent.
 * @param {React.Component} WrappedComponent Component to render.
 */
const ContentWrapper = ({ heading, data, WrappedComponent, experience = null }) => {
  if (!data) {
    return <></>;
  }

  const filteredData = data.filter(value => !value.hidden); //Remove hidden data

  if (filteredData.length < 1) {
    return <></>;
  } else {
    if (experience) {
      return <WrappedComponent heading={heading} data={filteredData} experience={experience} />;
    }
    return <WrappedComponent heading={heading} data={filteredData} />;
  }
};

/**
 * Create personal info section.
 *
 * @param {string} name Name of resumee holder.
 * @param {object} role Role of resume holder.
 * @param {Array} contactsList List of contacts having hidden = false.
 */
const PersonalInformation = ({ name, role, introduction, profileImg, contactsList }) => {
  return (
    <View>
      <View style={personalInformationStyles.personalInformation}>
        <View style={personalInformationStyles.left}>
          <View style={personalInformationStyles.profileImageWrapper}>
            <Image src={profileImg && !profileImg.deleted ? profileImg.value : ProfileImage} alt="Image"></Image>
          </View>
        </View>
        <View>
          <View>
            <Text style={personalInformationStyles.profileName}>{name}</Text>
            {role && !role.hidden && <Text style={personalInformationStyles.profileStatus}>{role.label}</Text>}
          </View>
          <View style={personalInformationStyles.content}>
            <View style={personalInformationStyles.contentRow}>
              {contactsList.map((contact, index) => (
                <PersonalInformationItem label={contact.type} value={contact.value} key={index} />
              ))}
            </View>
            {introduction && !introduction.hidden && (
              <View style={personalInformationStyles.contentRow}>
                <View style={personalInformationStyles.paragraph}>
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

/**
 * Create skills section
 *
 * @param {string} heading Header to show.
 * @param {Array} data Array of Skill object.
 */
const Skills = ({ heading, data }) => {
  const skillsItem = data.map(({ label, subSkills }, index) => (
    <SkillItem key={index} label={label} list={subSkills}></SkillItem>
  ));

  return (
    <View style={styles.resumeContentBlock}>
      <Text style={styles.contentHeader}>{heading}</Text>
      <View style={skills.paragraph}>{skillsItem}</View>
    </View>
  );
};

/**
 * Create a single skill Item.
 *
 * @param {string} label Name of skill.
 * @param {Array} list List of subskills.
 */
const SkillItem = ({ label, list }) => {
  return (
    <View style={skills.content}>
      <Text>{label + ' '}</Text>
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
      return <Text>{' ( ' + filteredResult + ' ) , '}</Text>;
    }
  }
};

/**
 * Create work experience section.
 *
 * @param {string} heading Header to show.
 * @param {object} experience Overall experience of resumee holder.
 * @param {Array} data Array of workExperience object.
 */
const WorkExperience = ({ heading, experience, data }) => {
  let experienceLabel = '';

  //Create label to show overall work experience.
  if (experience) {
    const experienceInYearAndMonth = dateUtils.getExperienceFormat(experience);

    experienceLabel = '';

    if (experienceInYearAndMonth.year === 0 && experienceInYearAndMonth.month === 0) {
      experienceLabel = '';
    } else {
      if (experienceInYearAndMonth.year !== 0) {
        experienceLabel =
          experienceInYearAndMonth.year > 1
            ? experienceInYearAndMonth.year.toString() + ' years '
            : experienceInYearAndMonth.year.toString() + ' year ';
      }

      if (experienceInYearAndMonth.month !== 0) {
        experienceLabel +=
          experienceInYearAndMonth.month > 1
            ? experienceInYearAndMonth.month.toString() + ' months'
            : experienceInYearAndMonth.month.toString() + ' month';
      }
    }
  }

  experienceLabel = experienceLabel ? '( ' + experienceLabel + ' )' : '';

  const workExperiences = data.map((value, index) => (
    <WorkExperienceItem key={index} workExperience={value}></WorkExperienceItem>
  ));

  return (
    <View style={styles.resumeContentBlock}>
      <Text style={styles.contentHeader}>{heading + ' ' + experienceLabel}</Text>
      {workExperiences}
    </View>
  );
};

/**
 * Create a single work experience section.
 *
 * @param {object} workExperience Work Experience object.
 */
const WorkExperienceItem = ({ workExperience }) => {
  const differenceInDate = dateUtils.getDifferenceYearMonth(
    workExperience.startDate,
    workExperience.endDate,
    workExperience.currentlyWorking
  );

  let postfixOne = workExperience.currentlyWorking ? 'Present' : moment(workExperience.endDate).format('MMMM YYYY');
  let postfixTwo = differenceInDate ? ' ( ' + differenceInDate + ' )' : '';

  const labelForDate = moment(workExperience.startDate).format('MMMM YYYY') + ' - ' + postfixOne + postfixTwo;

  const roles = workExperience.responsibilities.split('.').filter(role => role.trim() !== '');
  const achievments = workExperience.achievements.split('.').filter(achievment => achievment.trim() !== '');

  const refereeName = workExperience.refereeName;
  const refereeContact = workExperience.refereeContact;

  return (
    <View style={styles.contentBlock}>
      <View style={styles.paragraph}>
        <Text style={styles.contentSubHeader}>{workExperience.name}</Text>
        <Text>{workExperience.position}</Text>
        <Text>{labelForDate}</Text>
      </View>
      {roles && (
        <View style={styles.paragraph}>
          <Text>Roles and Responsibilities</Text>
          <View>
            {roles.map((role, index) => (
              <Text key={index} style={workExpStyles.list}>
                &#8226; {role.trim()}
              </Text>
            ))}
          </View>
        </View>
      )}
      {achievments && (
        <View style={styles.paragraph}>
          <Text>Achievements</Text>
          <View>
            {achievments.map((achievment, index) => (
              <Text key={index} style={workExpStyles.list}>
                &#8226; {achievment.trim()}
              </Text>
            ))}
          </View>
        </View>
      )}
      {refereeName && refereeContact && (
        <View style={styles.paragraph}>
          <Text>{'Referee' + ' ' + refereeName + ' ' + '( ' + refereeContact + ' )'}</Text>
        </View>
      )}
    </View>
  );
};

/**
 * Create projects undertaken section.
 *
 * @param {string} heading Header to show.
 * @param {Array} data Array of project object.
 */
const ProjectUndertaken = ({ heading, data }) => {
  if (!data) {
    return <></>;
  }

  const filteredProjects = data.filter(project => !project.hidden); //Remove hidden project.

  if (filteredProjects.length < 1) {
    return <></>;
  }

  return (
    <View style={styles.resumeContentBlock}>
      <Text style={styles.contentHeader}>{heading}</Text>
      <View style={styles.contentBlock}>
        {filteredProjects.map((value, index) => (
          <ProjectItem key={index} project={value}></ProjectItem>
        ))}
      </View>
    </View>
  );
};

/**
 * Create a single project item.
 *
 * @param {object} project Project object.
 */
const ProjectItem = ({ project }) => {
  const differenceInDate = dateUtils.getDifferenceYearMonth(project.startDate, project.endDate, project.ongoing);

  let postfixOne = project.ongoing ? 'Present' : moment(project.endDate).format('MMMM YYYY');
  let postfixTwo = differenceInDate ? ' ( ' + differenceInDate + ' )' : '';

  const labelForDate = moment(project.startDate).format('MMMM YYYY') + ' - ' + postfixOne + postfixTwo;

  return (
    <View style={styles.paragraph}>
      <Text style={styles.contentSubHeader}>{project.name}</Text>
      <Text>{labelForDate}</Text>
      {project.description && <Text>{project.description}</Text>}
    </View>
  );
};

/**
 * Create achievements section.
 *
 * @param {string} heading Heading to show.
 * @param {Array} data Array of achievement object.
 */
const Achievement = ({ heading, data }) => {
  if (!data) {
    return <></>;
  }

  const filteredAchievements = data.filter(achievement => !achievement.hidden);

  if (filteredAchievements.length < 1) {
    return <></>;
  }

  return (
    <View style={styles.resumeContentBlock}>
      <Text style={styles.contentHeader}>{heading}</Text>
      <View style={styles.contentBlock}>
        {filteredAchievements.map((achievement, index) => {
          return (
            <View key={index} style={styles.paragraph}>
              <Text style={styles.contentSubHeader}>{achievement.name}</Text>
              <Text>{moment(achievement.date).format('MMMM YYYY')}</Text>
              {achievement.description && <Text>{achievement.description}</Text>}
            </View>
          );
        })}
      </View>
    </View>
  );
};

/**
 * Create certificate section.
 *
 * @param {string} heading Header to show.
 * @param {Array} data Array of certificate object.
 */
const Certificate = ({ heading, data }) => {
  if (!data) {
    return <></>;
  }

  const filteredCertificates = data.filter(certificate => !certificate.hidden);

  if (filteredCertificates.length < 1) {
    return <></>;
  }

  return (
    <View style={styles.resumeContentBlock}>
      <Text style={styles.contentHeader}>{heading}</Text>
      <View style={styles.contentBlock}>
        {filteredCertificates.map((certificate, index) => (
          <View key={index} style={styles.paragraph}>
            <Text style={styles.contentSubHeader}>{certificate.name}</Text>
            <Text>{certificate.link}</Text>
            <Text>{moment(certificate.date).format('MMMM YYYY')}</Text>
            {certificate.description && <Text>{certificate.description}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
};

const PersonalInformationItem = ({ label, value }) => {
  return (
    <View style={personalInformationStyles.contentRowItem}>
      <Text style={personalInformationStyles.contentLeft}>{label}</Text>
      <Text style={personalInformationStyles.contentRight}>{value}</Text>
    </View>
  );
};

export default MyDocument;
