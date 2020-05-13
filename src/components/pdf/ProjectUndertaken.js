import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import * as dateUtils from '~/utilities/date/FormatDate';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

/**
 * Create projects undertaken section.
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
 */
const ProjectItem = ({ project }) => {
  const labelForDate = dateUtils.getEngagementTenure(project.startDate, project.endDate, project.ongoing);

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text style={pdfStyles.styles.contentSubHeader}>{project.name}</Text>
      <Text>{labelForDate}</Text>
      {project.description ? <Text>{project.description}</Text> : <></>}
    </View>
  );
};

ProjectUndertaken.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.array,
};

ProjectItem.propTypes = {
  project: PropTypes.object,
};

export default ProjectUndertaken;
