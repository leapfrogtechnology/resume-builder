import swal from 'sweetalert';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import textConstants from '~/constant/textConstants';
import routeConstants from '~/constant/routeConstants';
import * as localStorage from '~/storage/LocalStorage';
import { getErrorMessage } from '~/utilities/getErrorMessage';
import * as resumeBuilderService from '~/service/resumeBuilder';

const Login = () => {
  const router = useRouter();
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);

  const responseGoogle = response => {
    const data = {
      tokenId: response.tokenId,
    };

    resumeBuilderService
      .validateUser(data)
      .then(async res => {
        const { username, email, tokens } = res.data.data;

        await localStorage.saveAccessToken(tokens.accessToken);
        await localStorage.saveRefreshToken(tokens.refreshToken);
        await localStorage.saveUser(username, email);

        setLoginErrorMessage(null);

        router.push(routeConstants.DASHBOARD);
      })
      .catch(err => {
        swal({ text: getErrorMessage(err) });
      });
  };

  return (
    <div className="login">
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
    </div>
  );
};

export default Login;
