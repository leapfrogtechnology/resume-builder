// Data source
const DATA = {
  name: 'Ribby McFroggy',
  role: {
    name: 'Engineering Manager',
    label: 'Engineering Manager',
    hidden: false,
  },
  introduction: {
    hidden: false,
    value:
      'My name is Ribby and I am currently the Engineering Manager at Leapfrog. I love to challenge the normal and help build extraordinary product experiences.',
  },
  overallExperience: '4',
  // Contact Information
  email: { value: 'ribby@lftechnology.com', hidden: false },
  phone: { value: '9841000000', hidden: false },
  github: { value: 'ribbyX', hidden: false },
  stackOverflow: { value: 'https://github.com/ribbX', hidden: false },
  linkedIn: { value: 'https://linkedIn.com/ribbX', hidden: false },

  achievements: [
    {
      name: 'Headhunt Award',
      date: '1970-01-01T00:00:00.000Z',
      description: 'Some random text',
      hidden: false,
      isDeleted: false,
      deletedOn: '1970-01-01T00:00:00.000Z',
    },
    {
      name: 'Premium Janitor Award',
      date: '1970-01-01T00:00:00.000Z',
      description: 'Some random text',
      hidden: false,
      isDeleted: false,
      deletedOn: '1970-01-01T00:00:00.000Z',
    },
  ],
  skills: [
    {
      name: 'JS',
      label: 'Javascript',
      hidden: false,
      isDeleted: 'false',
      deletedOn: '1970-01-01T00:00:00.000Z',
      subSkills: [
        {
          name: 'react',
          label: 'React',
        },
        {
          name: 'node',
          label: 'Node.Js',
        },
      ],
    },
    {
      name: 'python',
      label: 'Python',
      hidden: false,
      isDeleted: 'false',
      deletedOn: '1970-01-01T00:00:00.000Z',
      subSkills: [
        {
          name: 'django',
          label: 'Django',
        },
        {
          name: 'flask',
          label: 'Flask',
        },
      ],
    },
    {
      name: 'PHP',
      label: 'PHP',
      hidden: false,
      isDeleted: 'false',
      deletedOn: '1970-01-01T00:00:00.000Z',
      subSkills: [
        {
          name: 'laravel',
          label: 'Laravel',
        },
        {
          name: 'zend',
          label: 'Zend',
        },
      ],
    },
  ],
  workExperience: [
    {
      name: 'Hewlett Packard Enterprise',
      position: 'Associate Engineering Manager',
      startDate: '1970-01-01T00:00:00.000Z',
      endDate: '1971-04-01T00:00:00.000Z',
      currentlyWorking: false,
      responsibilities:
        'Involved in developing and implementation of the web application using R framework.Contributed in database design and development of Project “Teamed-Up”.Designed applications using oriented concepts',
      achievements:
        'Changed the first obstacle to become a solution.Was able to convert the thousand line of codes into fifteen lines',
      refereeName: 'Mr. Andre Pistaolava',
      refereeContact: 'andre@gmail.com',
      hidden: true,
      isDeleted: false,
      deletedOn: '1970-01-01T00:00:00.000Z',
    },
    {
      name: 'HP Enterprise',
      position: 'Janitor',
      startDate: '1970-01-01T00:00:00.000Z',
      endDate: '1970-01-01T00:00:00.000Z',
      currentlyWorking: false,
      responsibilities: 'Some random text',
      achievements: 'Some random text',
      refereeName: 'Kevin',
      refereeContact: 'kevin@dontcontact.me',
      hidden: false,
      isDeleted: false,
      deletedOn: '1970-01-01T00:00:00.000Z',
    },
  ],
  projects: [
    {
      name: 'AI Thoughtbot',
      startDate: '1970-01-01T00:00:00.000Z',
      endDate: '1970-01-01T00:00:00.000Z',
      ongoing: false,
      type: 'Personal',
      description: 'I built an aI thoughtbot that gave relationship advice to couples in distress.',
      hidden: false,
      isDeleted: false,
      deletedOn: '1970-01-01T00:00:00.000Z',
    },
  ],
  certificates: [
    {
      name: 'Coursera Advanced React',
      link: 'https://dontcontact.me/404',
      date: '1970-01-01T00:00:00.000Z',
      description: 'Advanced react course completed with React under the hood',
      hidden: false,
      isDeleted: false,
      deletedOn: '1970-01-01T00:00:00.000Z',
    },
  ],
};

export default DATA;
