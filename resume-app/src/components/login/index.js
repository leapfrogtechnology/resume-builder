import React from "react";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";

import textConstants from "constant/textConstants";
import routeConstants from "constant/routeConstants";
import * as localStorage from "storage/LocalStorage";
import { LoginPicture, Logo, Google } from "assets/image";
import { getErrorMessage } from "utilities/getErrorMessage";
import * as resumeBuilderService from "service/resumeBuilder";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loginErrorMessage: null,
      isLoggedIn: localStorage.getUser() ? true : false,
    };
  }

  responseGoogle = async (response) => {
    const data = {
      tokenId: response.tokenId,
    };

    try {
      const res = await resumeBuilderService.validateUser(data);
      const { username, isAdmin, email, tokens } = res.data.data;

      localStorage.saveAccessToken(tokens.accessToken);
      localStorage.saveRefreshToken(tokens.refreshToken);
      localStorage.saveUser(username, email, isAdmin);

      this.setState({
        loginErrorMessage: null,
        isLoggedIn: true,
      });
    } catch (err) {
      const loginErrorMessage = getErrorMessage(err);

      this.setState({
        loginErrorMessage,
      });
      swal({ text: this.state.loginErrorMessage });
    }
  };

  render() {
    const { isLoggedIn } = this.state;

    return !isLoggedIn ? (
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
              <h1 className="login-container__header">
                Build your CV like a PRO!
              </h1>
              <div className="login-container__login-option">
                <div className="login-container__label">
                  Our online tool lets you easily build and share your
                  professional CV’s.
                </div>
                <div className="login-container__login-component">
                  <GoogleLogin
                    clientId={textConstants.GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                      <div
                        className="login-container__google"
                        onClick={renderProps.onClick}
                      >
                        <span className="login-container__google-icon">
                          <img src={Google} alt="Google" />
                        </span>
                        <span className="login-container__google-text">
                          Sign in with Google
                        </span>
                      </div>
                    )}
                    className="login-container__google-button"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
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
    ) : (
      <Redirect
        to={{
          pathname: routeConstants.DASHBOARD,
        }}
      ></Redirect>
    );
  }
}

export default Login;
