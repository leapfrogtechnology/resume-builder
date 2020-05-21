import Router from 'next/router';
import { Component } from 'react';

import * as localStorage from '~/storage/LocalStorage';
import routeConstants from '~/constant/routeConstants';

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    async componentDidMount() {
      const token = (await localStorage.getAccessToken()) || null;

      if (!token) {
        Router.replace(routeConstants.LOGIN);
        return;
      }
      this.setState({ isLoading: false });
    }

    render() {
      return <div>{this.state.isLoading ? <div>LOADING....</div> : <AuthComponent {...this.props} />}</div>;
    }
  };
}
