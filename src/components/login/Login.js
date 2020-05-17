import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import GoogleLogin from 'react-google-login';

import * as resumeBuilderService from '~/service/resumeBuilder';

import textConstants from '~/constant/textConstants';
import routeConstants from '~/constant/routeConstants';

import * as storageUtil from '~/storage/LocalStorage';
import { getErrorMessage } from '~/utilities/getErrorMessage';

const GoogleLoginComponent = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = storageUtil.getUser() ? useState(true) : useState(false);

  const responseGoogle = response => {
    const data = {
      tokenId: response.tokenId,
    };

    resumeBuilderService
      .validateUser(data)
      .then(async res => {
        const { user, token } = res.data.data;

        await storageUtil.saveAccessToken(token);
        await storageUtil.saveUser(user);

        setLoginErrorMessage(null);
        setIsLoggedIn(true);
      })
      .catch(err => {
        setLoginErrorMessage(getErrorMessage(err));
      });
  };

  return !isLoggedIn ? (
    <>
      <GoogleLogin
        clientId={textConstants.GOOGLE_CLIENT_ID}
        buttonText={
          <div className="google-button">
            <i className="fa fa-google"></i>
            <span>Sign in with Google</span>
          </div>
        }
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ></GoogleLogin>
      {loginErrorMessage && <div>{loginErrorMessage}</div>}
    </>
  ) : (
    <Redirect
      to={{
        pathname: routeConstants.RESUME_BUILDER,
      }}
    />
  );
};

export default GoogleLoginComponent;
