import Head from 'next/head';
import swal from 'sweetalert';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import MyDocument from '~/components/pdf/Pdf';
import Header from '~/components/header/Header';
import { FormContext } from '~/components/FormContext';
import Dashboard from '~/components/dashboard/Dashboard';

import { downloadPDF } from '~/utilities/download';
import textConstants from '~/constant/textConstants';
import * as resumeService from '~/service/resumeBuilder';
import { getErrorMessage } from '~/utilities/getErrorMessage';
import { getUser } from '~/storage/LocalStorage';

const PreviewResume = ({ context }) => {
  const router = useRouter();
  const [preview, setPreview] = useState(true);
  const [hideSideNav, setHideSideNav] = useState(false);
  const [data, updateData] = useState({});
  const [statusCode, setStatusCode] = useState(null);
  const [downloadPdf, setDownloadPdf] = useState(false);

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

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const result = await resumeService.fetchResume(router.query.email);
        const resume = JSON.parse(result.data);

        const user = await getUser();

        if (user && user.isAdmin) {
          setPreview(false);
          setHideSideNav(true);
        }
        setStatusCode(result.status);
        updateData(resume ? resume : {});
      } catch (err) {
        console.log(err);
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
    hideSideNav: { get: hideSideNav },
    updateCV: updateCvHandler,
  };

  const toggleDownload = () => setDownloadPdf(!downloadPdf);

  if (statusCode === textConstants.NOT_FOUND) {
    return <ErrorPage statusCode={textConstants.NOT_FOUND} />;
  }

  return (
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
          <Header name={data.name} btnType="downlaod" onclick={toggleDownload} />
          <Dashboard />
          {downloadPdf && (
            <PDFDownloadLink document={<MyDocument resumeJson={data} />} fileName="somename.pdf">
              {({ url, loading }) => {
                console.log('here');
                downloadPDF(url, data.name, loading, toggleDownload);
              }}
            </PDFDownloadLink>
          )}
        </FormContext.Provider>
      </div>
    )
  );
};

PreviewResume.getInitialProps = async ctx => {
  return { request: true };
};

export default PreviewResume;
