import moment from 'moment';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

import { ProfileImage } from '~/assets/image';
import * as dateUtils from '~/utilities/date/FormatDate';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

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
      <Page size="A4" style={pdfStyles.styles.page}>
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
        <ContentWrapper heading="Projects Undertaken" data={projects} WrappedComponent={ProjectUndertaken} />
        <ContentWrapper heading="Achievements" data={achievements} WrappedComponent={Achievement} />
        <ContentWrapper heading="Certificates" data={certificates} WrappedComponent={Certificate} />
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
      <View style={pdfStyles.personalInformationStyles.personalInformation}>
        <View style={pdfStyles.personalInformationStyles.left}>
          <View style={pdfStyles.personalInformationStyles.profileImageWrapper}>
            <Image src={profileImg && !profileImg.deleted ? profileImg.value : ProfileImage} alt="Image"></Image>
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
            <View style={pdfStyles.personalInformationStyles.contentRow}>
              {contactsList.map((contact, index) => (
                <PersonalInformationItem label={contact.type} value={contact.value} key={index} />
              ))}
            </View>
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
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.skills.paragraph}>{skillsItem}</View>
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
            ? `${experienceInYearAndMonth.year} years `
            : `${experienceInYearAndMonth.year}  year `;
      }

      if (experienceInYearAndMonth.month !== 0) {
        experienceLabel +=
          experienceInYearAndMonth.month > 1
            ? `${experienceInYearAndMonth.month} months `
            : `${experienceInYearAndMonth.month} month `;
      }
    }
  }

  experienceLabel = experienceLabel ? `( ${experienceLabel} )` : '';

  const workExperiences = data.map((value, index) => (
    <WorkExperienceItem key={index} workExperience={value}></WorkExperienceItem>
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{`${heading} ${experienceLabel}`}</Text>
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
  const labelForDate = getEngagementTenure(
    workExperience.startDate,
    workExperience.endDate,
    workExperience.currentlyWorking
  );

  const roles = workExperience.responsibilities.split('.').filter(role => role.trim() !== '');
  const achievements = workExperience.achievements.split('.').filter(achievement => achievement.trim() !== '');

  const refereeName = workExperience.refereeName;
  const refereeContact = workExperience.refereeContact;

  return (
    <View style={pdfStyles.styles.contentBlock}>
      <View style={pdfStyles.styles.paragraph}>
        <Text style={pdfStyles.styles.contentSubHeader}>{workExperience.name}</Text>
        <Text>{workExperience.position}</Text>
        <Text>{labelForDate}</Text>
      </View>
      <List title="Roles and Responsibilities" items={roles} />
      <List title="Achievements" items={achievements} />
      <RefereeSection name={refereeName} contact={refereeContact} />
    </View>
  );
};

const List = ({ title, items }) => {
  const listItems = items.map((item, index) => <ListItem key={index} item={item} />);

  if (items.length < 1) {
    return <></>;
  }

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text>{title}</Text>
      <View>{listItems}</View>
    </View>
  );
};

const ListItem = ({ item }) => {
  return <Text style={pdfStyles.workExpStyles.list}>&#8226; {item.trim()}</Text>;
};

const RefereeSection = ({ name, contact }) => {
  if (!name || !contact) {
    return <></>;
  }

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text>{`Referee ${name} ( ${contact} )`}</Text>
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
  const projectsUntertaken = data.map((project, index) => <ProjectItem key={index} project={project} />);

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.styles.contentBlock}>{projectsUntertaken}</View>
    </View>
  );
};

/**
 * Create a single project item.
 *
 * @param {object} project Project object.
 */
const ProjectItem = ({ project }) => {
  const labelForDate = getEngagementTenure(project.startDate, project.endDate, project.ongoing);

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text style={pdfStyles.styles.contentSubHeader}>{project.name}</Text>
      <Text>{labelForDate}</Text>
      {project.description ? <Text>{project.description}</Text> : <></>}
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
  const achievementItems = data.map(({ name, date, description }, index) => (
    <AchievementItem key={index} title={name} date={date} description={description} />
  ));

  return (
    <View style={pdfStyles.styles.resumeContentBlock}>
      <Text style={pdfStyles.styles.contentHeader}>{heading}</Text>
      <View style={pdfStyles.styles.contentBlock}>{achievementItems}</View>
    </View>
  );
};

const AchievementItem = ({ title, date, description }) => {
  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text style={pdfStyles.styles.contentSubHeader}>{title}</Text>
      <Text>{moment(date).format('MMMM YYYY')}</Text>
      {description ? <Text>{description}</Text> : <></>}
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

const PersonalInformationItem = ({ label, value }) => {
  return (
    <View style={pdfStyles.personalInformationStyles.contentRowItem}>
      <Text style={pdfStyles.personalInformationStyles.contentLeft}>{label}</Text>
      <Text style={pdfStyles.personalInformationStyles.contentRight}>{value}</Text>
    </View>
  );
};

const getEngagementTenure = (startDate, endDate, currentlyEngaged) => {
  const differenceInDate = dateUtils.getDifferenceYearMonth(startDate, endDate, currentlyEngaged);

  let postfixOne = currentlyEngaged ? 'Present' : moment(endDate).format('MMMM YYYY');
  let postfixTwo = differenceInDate ? `( ${differenceInDate} )` : '';

  const labelForDate = `${moment(startDate).format('MMMM YYYY')}  -  ${postfixOne} ${postfixTwo}`;

  return labelForDate;
};

export default MyDocument;
