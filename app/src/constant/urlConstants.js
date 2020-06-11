const urlConstants = {
  saveResumeUrl: '/resume',
  refreshTokenUrl: '/refresh',
  googleLoginUrl: '/auth/google',
  fetchResumeUrl: '/resume/:email',
  deleteResumeUrl: '/resume/delete',
  fetchUserProfileUrl: '/users/self',
  apiBaseUrl: process.env.API_BASE_URL,
};

export default urlConstants;
