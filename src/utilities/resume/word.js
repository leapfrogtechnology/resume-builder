// import {
//   Document,
//   Packer,
//   Paragraph,
//   TextRun,
//   Table,
//   TableRow,
//   TableCell,
//   BorderStyle,
//   VerticalAlign,
//   HeightRule,
//   Hyperlink,
//   Media,
// } from 'docx';

// import moment from 'moment';
// import * as dateUtils from '~/utilities/date/FormatDate';

// // Set border none
// const BORDER_NONE = {
//   top: {
//     style: BorderStyle.NIL,
//     size: 0,
//   },
//   bottom: {
//     style: BorderStyle.NIL,
//     size: 0,
//   },
//   left: {
//     style: BorderStyle.NIL,
//     size: 0,
//   },
//   right: {
//     style: BorderStyle.NIL,
//     size: 0,
//   },
// };

// /**
//  * Create resume in docx format.
//  *
//  * @param {JSON} resumeJSON Resume in json format.
//  */
// const resumeDoc = resumeJSON => {
//   const doc = new Document();

//   const contactsList = [];

//   const name = resumeJSON['name'];
//   const role = resumeJSON['role'];
//   const profileImg = resumeJSON['profileImage'];

//   if (resumeJSON['email'] && !resumeJSON['email'].hidden && resumeJSON['email'].value) {
//     contactsList.push({ type: 'Email', value: resumeJSON['email'].value });
//   }

//   if (resumeJSON['phone'] && !resumeJSON['phone'].hidden && resumeJSON['phone'].value) {
//     contactsList.push({ type: 'Phone', value: resumeJSON['phone'].value });
//   }

//   if (resumeJSON['github'] && !resumeJSON['github'].hidden && resumeJSON['github'].value) {
//     contactsList.push({ type: 'Github', value: resumeJSON['github'].value });
//   }

//   if (resumeJSON['linkedIn'] && !resumeJSON['linkedIn'].hidden && resumeJSON['linkedIn'].value) {
//     contactsList.push({ type: 'LinkedIn', value: resumeJSON['linkedIn'].value });
//   }

//   doc.addSection({
//     properties: {},
//     children: [
//       createPersonalInfo(name, role, profileImg, doc),
//       insertParagraph(''),
//       createIntroduction(resumeJSON.introduction),
//       insertParagraph(''),
//       createContacts(contactsList),
//       insertParagraph(''),
//       createSkills(resumeJSON['skills'], 'Skills'),
//       insertParagraph(''),
//       createWorkExperiences(resumeJSON['workExperience'], resumeJSON['experience']),
//       insertParagraph(''),
//       createProjects(resumeJSON['projects']),
//       insertParagraph(''),
//       createAchievements(resumeJSON['achievements']),
//       insertParagraph(''),
//       createCertificates(resumeJSON['certificates']),
//     ],
//   });

//   Packer.toBlob(doc).then(blob => {
//     saveAs(blob, 'example.docx');
//   });
// };

// /**
//  * Get table containg personal info.
//  *
//  * @param {string} name Name of resumee holder.
//  * @param {object} role Role of resumee holder.
//  * @param {string} profileImg Base64 image.
//  * @param {Document} file Object of document created.
//  * @returns {Table/Paragraph} Table containing personal info/ Empty Paragraph.
//  */
// const createPersonalInfo = (name, role, profileImg, file) => {
//   if (!name) {
//     return insertParagraph('');
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: [
//       new TableRow({
//         children: [
//           new TableCell({
//             borders: BORDER_NONE,
//             children: [
//               new Paragraph({
//                 children: [
//                   profileImg && profileImg.value
//                     ? createImage(profileImg.value, file, 53, 53)
//                     : new TextRun({ text: '' }),
//                 ],
//               }),
//             ],
//           }),
//           getNameRoleSection(name, role),
//         ],
//       }),
//     ],
//   });
// };

// /**
//  * Get section containing name and role.
//  *
//  * @param {string} name Name of resumee holder.
//  * @param {object} role Role of resumee holder.
//  * @returns {TableCell} Contains name and role section.
//  */
// const getNameRoleSection = (name, role) => {
//   const children = [];

//   const nameParagraph = createParagraph(name, '28pt', true);

//   children.push(nameParagraph);

//   if (role) {
//     if (!role.hidden) {
//       children.push(createParagraph(role.label, '14pt', false, false));
//     }
//   }

//   return new TableCell({
//     margins: {
//       left: 400,
//     },
//     borders: BORDER_NONE,
//     children: children,
//   });
// };

// /**
//  * Create table with contact details.
//  *
//  * @param {Array} contacts List of contact object.
//  * @returns {Table/Paragraph} Table containing contact details/Empty Paragraph.
//  */
// const createContacts = contacts => {
//   if (contacts.length < 1) {
//     return insertParagraph('');
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: contacts.map(contact => createContactRow(contact)),
//   });
// };

// /**
//  * Create a row for contact.
//  *
//  * @param {Object} contact Contact object.
//  * @returns {TableRow} Row containing a single contact details.
//  */
// const createContactRow = contact => {
//   return new TableRow({
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         margins: {
//           left: 1200,
//         },
//         children: [
//           new Paragraph({
//             children: [
//               new TextRun({
//                 text: contact.type,
//                 bold: true,
//                 size: '14pt',
//               }),
//             ],
//           }),
//         ],
//       }),
//       new TableCell({
//         borders: BORDER_NONE,
//         margins: {
//           left: 400,
//         },
//         children: [
//           new Paragraph({
//             children: [
//               new TextRun({
//                 text: contact.value,
//                 bold: false,
//                 size: '14pt',
//               }),
//             ],
//           }),
//         ],
//       }),
//     ],
//   });
// };

// /**
//  *  Create table for introduction section.
//  *
//  * @param {object} introduction Personal instroduction.
//  * @returns {Table/Paragraph} Table containing intro section/Empty Paragraph.
//  */
// const createIntroduction = introduction => {
//   if (!introduction || introduction.hidden) {
//     return insertParagraph('');
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: [
//       new TableRow({
//         children: [
//           new TableCell({
//             borders: BORDER_NONE,
//             margins: {
//               left: 1200,
//             },
//             children: [new Paragraph({ children: [new TextRun({ text: introduction.value, size: '14pt' })] })],
//           }),
//         ],
//       }),
//     ],
//   });
// };

// /**
//  * Create table for skills section.
//  *
//  * @param {Array} skills List of skill object.
//  * @param {string} heading Title for the section.
//  * @returns {Table} Table containing skill section.
//  */
// const createSkills = (skills, heading) => {
//   if (!skills) {
//     return insertParagraph('');
//   }

//   // Row for Heading
//   const skillHeading = new TableRow({
//     children: [
//       new TableCell({
//         margins: {
//           bottom: 20,
//         },
//         borders: BORDER_NONE,
//         children: [new Paragraph({ children: [new TextRun({ text: heading, bold: true, size: '18pt' })] })],
//       }),
//     ],
//   });

//   // Creating list of text of subskills
//   const skillsTextRun = [];

//   skills.forEach(skill => {
//     if (!skill.hidden) {
//       skillsTextRun.push(new TextRun({ text: skill.name, bold: true, size: '14pt' }));
//       if (skill.subSkills.length > 0) {
//         skillsTextRun.push(
//           new TextRun({
//             text:
//               ' ( ' +
//               skill.subSkills
//                 .map(subskill => {
//                   return subskill.name;
//                 })
//                 .join() +
//               ' ),  ',
//             bold: false,
//             size: '14pt',
//           })
//         );
//       }
//     }
//   });

//   if (skillsTextRun.length < 1) {
//     return createParagraph('', '12pt', false, false);
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: [
//       skillHeading,
//       new TableRow({
//         children: [
//           new TableCell({
//             borders: BORDER_NONE,
//             children: [new Paragraph({ children: skillsTextRun })],
//           }),
//         ],
//       }),
//     ],
//   });
// };

// /**
//  * Create work experience section.
//  *
//  * @param {object} experience Experience or resumee holder.
//  * @param {Array} workExperiences List of workExperience object.
//  * @returns {Table/Paragraph} Table containing work experience section/Empty Paragraph.
//  */
// const createWorkExperiences = (workExperiences, experience) => {
//   if (!workExperiences) {
//     return insertParagraph('');
//   }

//   let experienceLabel = '';

//   if (experience) {
//     const experienceInYearAndMonth = dateUtils.getExperienceFormat(experience);

//     experienceLabel = '';

//     if (experienceInYearAndMonth.year !== 0) {
//       experienceLabel =
//         experienceInYearAndMonth.year > 1
//           ? experienceInYearAndMonth.year.toString() + ' years '
//           : experienceInYearAndMonth.year.toString() + ' year ';
//     }

//     if (experienceInYearAndMonth.month !== 0) {
//       experienceLabel +=
//         experienceInYearAndMonth.month > 1
//           ? experienceInYearAndMonth.month.toString() + ' months'
//           : experienceInYearAndMonth.month.toString() + ' month';
//     }
//   }

//   experienceLabel = experienceLabel ? '( ' + experienceLabel + ' )' : '';

//   const headings = createHeadings('Work Experience ' + experienceLabel, '18pt', true);

//   const workExperinceList = [];

//   workExperiences.forEach(workExperience => {
//     if (!workExperience.hidden) {
//       workExperinceList.push(createWorkExperienceRow(workExperience));
//     }
//   });

//   if (workExperinceList.length < 1) {
//     return createParagraph('', '12pt', false, false);
//   }
//   return new Table({
//     borders: BORDER_NONE,
//     rows: [headings].concat(workExperinceList),
//   });
// };

// /**
//  * Create a row containin a single work experience.
//  *
//  * @param {Object} workExperience Work experience object.
//  * @returns {TableRow} Row containing project.
//  */
// const createWorkExperienceRow = workExperience => {
//   const rowList = [];

//   const subHeading = createParagraph(workExperience.name, '14pt', true, true);
//   const position = createParagraph(workExperience.position, '14pt', false);

//   const differenceInDate = dateUtils.getDifferenceYearMonth(
//     workExperience.startDate,
//     workExperience.endDate,
//     workExperience.currentlyWorking
//   );

//   let postfixOne = workExperience.currentlyWorking ? 'Present' : moment(workExperience.endDate).format('MMMM YYYY');
//   let postfixTwo = differenceInDate ? ' ( ' + differenceInDate + ' )' : '';

//   const labelForDate = moment(workExperience.startDate).format('MMMM YYYY') + ' - ' + postfixOne + postfixTwo;

//   const dateOfExperience = createParagraph(labelForDate, '14pt', false);

//   const titlesRow = new TableRow({
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: [subHeading, position, dateOfExperience],
//       }),
//     ],
//   });

//   const rolesList = workExperience.responsibilities.split('.').filter(value => value !== '');

//   const roles = new TableRow({
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: [createRowsWithList(rolesList, 'Roles and Responsisbilities')],
//       }),
//     ],
//   });

//   rowList.push(titlesRow);
//   rowList.push(roles);

//   if (workExperience.achievements) {
//     const achievementsList = workExperience.achievements.split('.').filter(value => value !== '');

//     const achievements = new TableRow({
//       children: [
//         new TableCell({
//           borders: BORDER_NONE,
//           verticalAlign: VerticalAlign.CENTER,
//           children: [createRowsWithList(achievementsList, 'Achievements')],
//         }),
//       ],
//     });

//     rowList.push(achievements);
//   }

//   if (workExperience.refereeName && workExperience.refereeContact) {
//     const referee = new TableRow({
//       children: [
//         new TableCell({
//           borders: BORDER_NONE,
//           verticalAlign: VerticalAlign.CENTER,
//           children: [
//             createParagraph(
//               'Referee ' + workExperience.refereeName + '( ' + workExperience.refereeContact + ' )',
//               '14pt',
//               false,
//               false
//             ),
//           ],
//         }),
//       ],
//     });

//     rowList.push(referee);
//   }

//   return new TableRow({
//     height: {
//       value: 20,
//       rule: HeightRule.EXACT,
//     },
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: [
//           new Table({
//             rows: rowList,
//           }),
//         ],
//       }),
//     ],
//   });
// };

// /**
//  * Create project undertaken section.
//  *
//  * @param {Array} projects List of projects.
//  * @returns {Table/Paragraph}  Rable containing projects section/ Empty Paragraph.
//  */
// const createProjects = projects => {
//   if (!projects) {
//     return insertParagraph('');
//   }

//   const headings = createHeadings('Projects Undertaken', '18pt', true);

//   const projectsList = [];

//   projects.forEach(project => {
//     if (!project.hidden) {
//       projectsList.push(createProjectsRow(project));
//     }
//   });

//   if (projectsList.length < 1) {
//     return createParagraph('', '12pt', false, false);
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: [headings].concat(projectsList),
//   });
// };

// /**
//  * Create a row containing a single project.
//  *
//  * @param {Object} project Project undertaken.
//  * @returns {TableRow} Row containing a project.
//  */
// const createProjectsRow = project => {
//   const tableCellChildren = [];

//   const subHeading = createParagraph(project.name, '14pt', true, true);

//   const differenceInDate = dateUtils.getDifferenceYearMonth(project.startDate, project.endDate, project.ongoing);

//   let postfixOne = project.ongoing ? 'Present' : moment(project.endDate).format('MMMM YYYY');
//   let postfixTwo = differenceInDate ? ' ( ' + differenceInDate + ' )' : '';

//   const labelForDate = moment(project.startDate).format('MMMM YYYY') + ' - ' + postfixOne + postfixTwo;

//   const dateOfProject = createParagraph(labelForDate, '14pt', false);

//   tableCellChildren.push(subHeading);
//   tableCellChildren.push(dateOfProject);

//   if (project.description) {
//     const description = createParagraph(project.description, '14pt', false);

//     tableCellChildren.push(description);
//   }

//   return new TableRow({
//     height: {
//       value: 20,
//       rule: HeightRule.EXACT,
//     },
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: tableCellChildren,
//       }),
//     ],
//   });
// };

// /**
//  * Create achievements section.
//  *
//  * @param {Array} achievements List of achievements.
//  * @returns {Table/Paragraph} Table containing achievement section/ Empty Paragraph.
//  */
// const createAchievements = achievements => {
//   if (!achievements) {
//     return insertParagraph('');
//   }

//   const headings = createHeadings('Achievements', '18pt', true);

//   const achievementsList = [];

//   achievements.forEach(achievement => {
//     if (!achievement.hidden) {
//       achievementsList.push(createAchievementRow(achievement));
//     }
//   });

//   if (achievementsList.length < 1) {
//     return createParagraph('', '12pt', false, false);
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: [headings].concat(achievementsList),
//   });
// };

// /**
//  * Create a row for a single achievement.
//  *
//  * @param {object} achievement Achievement object.
//  * @returns {TableRow} Row containing single achievement details.
//  */
// const createAchievementRow = achievement => {
//   const subHeading = createParagraph(achievement.name, '14pt', true, true);
//   const dateOfAchievement = createParagraph(moment(achievement.date).format('MMMM YYYY'), '14pt', false);

//   return new TableRow({
//     height: {
//       value: 20,
//       rule: HeightRule.EXACT,
//     },
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: [subHeading, dateOfAchievement],
//       }),
//     ],
//   });
// };

// /**
//  * Create certificate section.
//  *
//  * @param {object} certificates Certificate object.
//  * @returns {Table/Paragraph} Table containing certificates section / Empty Paragraph
//  */
// const createCertificates = certificates => {
//   if (!certificates) {
//     return insertParagraph('');
//   }

//   const headings = createHeadings('Certificates', '18pt', true);

//   const certificatesList = [];

//   certificates.forEach(certificate => {
//     if (!certificate.hidden) {
//       certificatesList.push(createCertificateRow(certificate));
//     }
//   });

//   if (certificatesList.length < 1) {
//     return createParagraph('', '12pt', false, false);
//   }

//   return new Table({
//     borders: BORDER_NONE,
//     rows: [headings].concat(certificatesList),
//   });
// };

// /**
//  * Create a row for single certificate.
//  *
//  * @param {object} certificate Certificate object.
//  * @returns {TableRow} Row containing details of a certificate.
//  */
// const createCertificateRow = certificate => {
//   const tableCellChildren = [];

//   const subHeading = createParagraph(certificate.name, '14pt', true, true);
//   // const link = createHyperLink(certificate.link);
//   const dateOfCertificate = createParagraph(moment(certificate.date).format('MMMM YYYY'), '14pt', false, false);

//   tableCellChildren.push(subHeading);
//   // tableCellChildren.push(link);
//   tableCellChildren.push(dateOfCertificate);

//   if (certificate.description) {
//     const description = createParagraph(certificate.description, '14pt');

//     tableCellChildren.push(description);
//   }

//   return new TableRow({
//     height: {
//       value: 20,
//       rule: HeightRule.EXACT,
//     },
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: tableCellChildren,
//       }),
//     ],
//   });
// };

// /**
//  * Create heading for Resume (e.g Work Experience).
//  *
//  * @param {string} heading Text to show.
//  * @param {string} fontSize E.g '18pt'.
//  * @param {bool} bold
//  * @returns {TableRow}
//  */
// const createHeadings = (heading, fontSize, bold) => {
//   return new TableRow({
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: [new Paragraph({ children: [new TextRun({ text: heading, size: fontSize, bold: bold })] })],
//       }),
//     ],
//   });
// };

// /**
//  * Create sub-heading for Resume (e.g Name for organization).
//  *
//  * @param {string} heading Text to show.
//  * @param {string} fontSize E.g '18pt'.
//  * @param {bool} bold
//  * @returns {TableRow}
//  */
// const createSubHeadings = (heading, fontSize, bold) => {
//   return new TableRow({
//     children: [
//       new TableCell({
//         borders: BORDER_NONE,
//         verticalAlign: VerticalAlign.CENTER,
//         children: [new Paragraph({ children: [new TextRun({ text: heading, size: fontSize, bold: bold }).break()] })],
//       }),
//     ],
//   });
// };

// /**
//  * Create a table with bullets list.
//  *
//  * @param {Array} list List of test to display.
//  * @param {string} title Title for the list.
//  * @returns {Table}
//  */
// const createRowsWithList = (list, title) => {
//   return new Table({
//     borders: BORDER_NONE,
//     rows: [
//       new TableRow({
//         children: [
//           new TableCell({
//             borders: BORDER_NONE,
//             verticalAlign: VerticalAlign.CENTER,
//             children: [new Paragraph({ children: [new TextRun({ text: title, size: '14pt' }).break()] })],
//           }),
//         ],
//       }),
//       new TableRow({
//         children: [
//           new TableCell({
//             borders: BORDER_NONE,
//             verticalAlign: VerticalAlign.CENTER,
//             children: createParagraphList(list),
//           }),
//         ],
//       }),
//     ],
//   });
// };

// /**
//  * Create a list of paragraphs.
//  *
//  * @param {Array} list Array of text.
//  */
// const createParagraphList = list => {
//   return list.map(value => insertParagraph(value, true, 0));
// };

// /**
//  * Insert paragrpah with or without bullet point.
//  *
//  * @param {string} text Value to insert in paragraph.
//  * @param {bool} bullets Sets the paragraph is in bullet form or not.
//  * @param {bool} bulletsLevel Select the depth level for bullet.
//  * @returns {Paragraph} Returns paragraph object.
//  */
// const insertParagraph = (text, bullets = false, bulletsLevel = 0) => {
//   if (!bullets) {
//     return new Paragraph({ text: text });
//   } else {
//     return new Paragraph({
//       children: [new TextRun({ text: text, size: '12pt' })],
//       bullet: {
//         level: bulletsLevel,
//       },
//     });
//   }
// };

// /**
//  * Create a paragraph.
//  *
//  * @param {string} text Text to insert in paragraph.
//  * @param {string} fontSize Size of text e.g '12pt'.
//  * @param {bool} bold Sets the paragraph to bold.
//  * @param {bool} breaks Inserts a new line before paragraph.
//  * @returns {Paragraph} Paragraph object.
//  */
// const createParagraph = (text, fontSize, bold = false, breaks = false) => {
//   if (breaks) {
//     return new Paragraph({ children: [new TextRun({ text: text, size: fontSize, bold: bold }).break()] });
//   }

//   return new Paragraph({ children: [new TextRun({ text: text, size: fontSize, bold: bold })] });
// };

// const createHyperLink = link => {
//   return new Paragraph({ children: [new Hyperlink(link, link)] });
// };

// /**
//  * Get image.
//  *
//  * @param {string} binaryImg Base64 Image.
//  * @param {Document} file Document to be created
//  * @param {Number} width Width of image.
//  * @param {Number} height Height of image.
//  * @returns {Media} Image to be added on doc.
//  */
// const createImage = (binaryImg, file, width, height) => {
//   return Media.addImage(file, binaryImg, width, height);
// };

// export default resumeDoc;
