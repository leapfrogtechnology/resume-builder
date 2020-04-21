import React, { useState } from 'react';

import Head from 'next/head';
import Header from '~/components/header/Header';
import Dashboard from '~/components/dashboard/Dashboard';

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);

  // Data source
  const userProfile = {
    personalInformation: {
      name: { data: 'Ribby McFroggy', visibility: true, bold: true },
      role: { data: 'Engineering Manager', visibility: true, bold: true },
      summary: {
        data:
          'My name is Ribby and I am currently the Engineering Manager at Leapfrog. I love to challenge the normal and help build extraordinary product expeirences.',
        visibility: true,
      },
    },
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
  };

  const username = userProfile.personalInformation.name.data;

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
      <Dashboard profile={userProfile} preview={preview} />
    </div>
  );
};

export default App;
