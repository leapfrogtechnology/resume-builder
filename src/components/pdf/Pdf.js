import React from 'react';
import PropTypes from 'prop-types';
import { Page, Document } from '@react-pdf/renderer';

import Skills from '~/components/pdf/Skill';
import Certificate from '~/components/pdf/Certificate';
import Achievement from '~/components/pdf/Achievement';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';
import WorkExperience from '~/components/pdf/WorkExperience';
import ContentWrapper from '~/components/pdf/ContentWrapper';
import ProjectUndertaken from '~/components/pdf/ProjectUndertaken';
import PersonalInformation from '~/components/pdf/PersonalInformation';

const MyDocument = ({ resumeJson }) => {
  const contacts = [];
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
    contacts.push({ type: 'Email', value: resumeJson['email'].value });
  }

  if (resumeJson['phone'] && !resumeJson['phone'].hidden && resumeJson['phone'].value) {
    contacts.push({ type: 'Phone', value: resumeJson['phone'].value });
  }

  if (resumeJson['github'] && !resumeJson['github'].hidden && resumeJson['github'].value) {
    contacts.push({ type: 'Github', value: resumeJson['github'].value });
  }

  if (resumeJson['linkedIn'] && !resumeJson['linkedIn'].hidden && resumeJson['linkedIn'].value) {
    contacts.push({ type: 'LinkedIn', value: resumeJson['linkedIn'].value });
  }

  return (
    <Document>
      <Page size="A4" style={pdfStyles.styles.page}>
        <PersonalInformation
          name={name}
          role={role}
          introduction={introduction}
          profileImg={profileImg}
          contacts={contacts}
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

MyDocument.propTypes = {
  resumeJson: PropTypes.object,
};

export default MyDocument;
