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
  contacts: [
    {
      type: 'Email Address',
      value: 'ribby@lftechnology.com',
    },
    {
      type: 'Phone Number',
      value: '983345698',
    },
    {
      type: 'GitHub',
      value: 'https://github.com/user/ribbyX',
    },
    {
      type: 'LinkedIn',
      value: 'https://linkedin.com/user/ribbyX',
    },
  ],
  achievements: [
    {
      title: 'Headhunt Award',
      date: 'December 2012',
      visibility: false,
    },
    {
      title: 'Golden Jublee Award',
      date: 'December 2015',
      visibility: true,
    },
  ],
  skills: [
    {
      name: 'JS',
      label: 'Javascript',
      hidden: 'false',
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
      hidden: 'false',
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
      hidden: 'false',
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
      endDate: '1970-01-01T00:00:00.000Z',
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
      title: 'AI Thoughtbot',
      startDate: 'September 2016',
      endDate: 'August 2019',
      description: 'I built an aI thoughtbot that gave relationship advice to couples in distress.',
    },
  ],
  certificates: [
    {
      title: 'Coursera Advanced React',
      date: 'August 2015',
      description: 'Advanced react course completed with React under the hood',
    },
  ],
};

export default DATA;
