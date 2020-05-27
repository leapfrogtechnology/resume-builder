import React from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';

import textConstants from '~/constant/textConstants';
import routeConstants from '~/constant/routeConstants';
import * as localStorage from '~/storage/LocalStorage';
import { LoginPicture, Logo, Google } from '~/assets/image';
import { getErrorMessage } from '~/utilities/getErrorMessage';
import * as resumeBuilderService from '~/service/resumeBuilder';

const Login = () => {
  const router = useRouter();

  const responseGoogle = async response => {
    const data = {
      tokenId: response.tokenId,
    };

    try {
      const res = await resumeBuilderService.validateUser(data);
      const { username, email, tokens } = res.data.data;

      await localStorage.saveAccessToken(tokens.accessToken);
      await localStorage.saveRefreshToken(tokens.refreshToken);
      await localStorage.saveUser(username, email);

      router.push(routeConstants.DASHBOARD);
    } catch (err) {
      swal({ text: getErrorMessage(err) });
    }
  };

  return (
    <div className="login-container">
      <div className="header-container">
        <div className="login-container__top-block">
          <div className="login-container__logo-wrapper">
            <img src={Logo} alt="Leapfrog" />
          </div>
        </div>
      </div>
      <div className="login-container__bottom-block">
        <div className="main-container">
          <div className="login-container__bottom-left">
            <h1 className="login-container__header">Build your CV like a PRO!</h1>
            <div className="login-container__login-option">
              <div className="login-container__label">
                Our online tool lets you easily build and share your professional CV’s.
              </div>
              <div className="login-container__login-component">
                <GoogleLogin
                  clientId={textConstants.GOOGLE_CLIENT_ID}
                  render={renderProps => (
                    <div className="login-container__google" onClick={renderProps.onClick}>
                      <span className="login-container__google-icon">
                        <img src={Google} alt="Google" />
                      </span>
                      <span className="login-container__google-text">Sign in with Google</span>
                    </div>
                  )}
                  className="login-container__google-button"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                ></GoogleLogin>
              </div>
            </div>
            <div className="login-container__disclaimer">
              By continuing, you are agreeing to our terms and conditions
            </div>
          </div>
          <div className="login-container__bottom-right">
            <img src={LoginPicture} alt="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
