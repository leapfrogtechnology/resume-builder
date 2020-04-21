import React, { useState } from 'react';

import Head from 'next/head';
import Header from '~/components/header/Header';
import Dashboard from '~/components/dashboard/Dashboard';
import { date } from 'yup';

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);

  // Data source
  const data = {
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
        skill: 'PHP',
        subSkills: ['Zend', 'Zend'],
        visibility: true,
      },
      {
        skill: 'Python',
        subSkills: ['Zend', 'Zend'],
        visibility: true,
      },
      {
        skill: 'Javascript',
        subSkills: ['Javascript', 'Zend'],
        visibility: false,
      },
    ],
    workExperience: [
      {
        company: 'Hewlett Packard Enterprise',
        position: 'Associate Engineering Manager',
        startDate: 'September 2016',
        endDate: 'August 19',
        roles:
          'Involved in developing and implementation of the web application using R framework.Contributed in database design and development of Project “Teamed-Up”.Designed applications using oriented concepts',
        achievements:
          'Changed the first obstacle to become a solution.Was able to convert the thousand line of codes into fifteen lines',
        referee: { name: 'Mr. Andre Pistaolava', email: 'andre@gmail.com' },
        visibility: true,
      },
      {
        company: 'Hewlett Packard Enterprise',
        position: 'Associate Engineering Manager',
        startDate: 'September 2016',
        endDate: 'August 19',
        roles:
          'Involved in developing and implementation of the web application using R framework.Contributed in database design and development of Project “Teamed-Up”.Designed applications using oriented concepts',
        achievements:
          'Changed the first obstacle to become a solution.Was able to convert the thousand line of codes into fifteen lines',
        referee: { name: 'Mr. Andre Pistaolava', email: 'andre@gmail.com' },
        visibility: true,
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

  const username = data.name;

  const handleOnPreviewBtnClicked = e => {
    e.preventDefault();
    setPreview(!preview);
  };

  return (
    <div className="page-container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>ResumeBuilder</title>
      </Head>
      <Header
        name={username}
        status="Employee"
        experience="5 years professional experience"
        onPreviewBtnClicked={handleOnPreviewBtnClicked}
      />
      <Dashboard profile={data} preview={preview} />
    </div>
  );
};

export default App;
