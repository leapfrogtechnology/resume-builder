import Head from 'next/head';
import swal from 'sweetalert';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import Header from '~/components/header/Header';
import { FormContext } from '~/components/FormContext';
import Dashboard from '~/components/dashboard/Dashboard';

import { getUser } from '~/storage/LocalStorage';
import textConstants from '~/constant/textConstants';
import routeConstants from '~/constant/routeConstants';
import * as resumeService from '~/service/resumeBuilder';
import { getErrorMessage } from '~/utilities/getErrorMessage';

const EditResume = ({ context }) => {
  const router = useRouter();
  const [preview] = useState(false);
  const [data, updateData] = useState({});
  const [loading, setLoading] = useState(true);
  const [statusCode, setStatusCode] = useState(null);

  const updateCvHandler = async updatedData => {
    try {
      const result = await resumeService.editResume(updatedData, router.query.email);

      updateData(prevState => ({ ...prevState, ...updatedData }));
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const logout = () => {
    storageUtil.logout();

    router.push(routeConstants.LOGIN);
  };

  const handleErrorResponse = err => {
    const errorMessage = getErrorMessage(err);

    switch (errorMessage) {
      case textConstants.SESSION_EXPIRED:
        swal({ text: errorMessage });
        logout();
      default:
        swal({ text: errorMessage });
    }
  };

  const previewBtnHandler = () => router.push(routeConstants.PREVIEW.replace('[email]', router.query.email));

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const result = await resumeService.fetchResume(router.query.email);
        const resume = JSON.parse(result.data);

        const user = await getUser();

        if (
          ((user && user.email === router.query.email) || (user && user.isAdmin)) &&
          result.status !== textConstants.UNAUTHORIZED_CODE
        ) {
          setStatusCode(result.status);
        } else {
          setStatusCode(404);
        }

        setLoading(false);
        updateData(resume ? resume : {});
      } catch (err) {
        setStatusCode(err.response.status);

        if (err.response.status !== textConstants.NOT_FOUND) {
          swal({ text: getErrorMessage(err) });
        }
      }
    };
    fetchResume();
  }, [context]);

  const store = {
    preview: { get: preview },
    data: { get: data },
    hideSideNav: { get: true },
    updateCV: updateCvHandler,
  };

  if (statusCode === textConstants.NOT_FOUND) {
    return <ErrorPage statusCode={textConstants.NOT_FOUND} />;
  }

  return (
    !loading &&
    statusCode && (
      <div className="page-container">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>ResumeBuilder</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
        </Head>
        <FormContext.Provider value={store}>
          <Header
            name={data.name}
            showPreviewBtn={true}
            downloadBtnHandler={null}
            previewBtnHandler={previewBtnHandler}
          />
          <Dashboard />
        </FormContext.Provider>
      </div>
    )
  );
};

EditResume.getInitialProps = async ctx => {
  return { request: true };
};

export default EditResume;
