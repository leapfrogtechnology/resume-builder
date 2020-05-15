import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import { textConstants } from '~/constant/textConstant';

const GoogleLoginComponent = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = response => {
    console.log(response);
    const profileObj = response.profileObj;
    const data = {
      tokenId: response.tokenId,
    };
  };

  return !isLoggedIn ? (
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
  ) : (
    <div>Logged In</div>
  );
};

export default GoogleLoginComponent;
