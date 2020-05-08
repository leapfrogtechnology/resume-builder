import { Text, View } from '@react-pdf/renderer';
import * as dateUtils from '~/utilities/date/FormatDate';
import * as pdfStyles from '~/components/pdf/pdf.styles.js';

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
  const labelForDate = dateUtils.getEngagementTenure(project.startDate, project.endDate, project.ongoing);

  return (
    <View style={pdfStyles.styles.paragraph}>
      <Text style={pdfStyles.styles.contentSubHeader}>{project.name}</Text>
      <Text>{labelForDate}</Text>
      {project.description ? <Text>{project.description}</Text> : <></>}
    </View>
  );
};

export default ProjectUndertaken;
