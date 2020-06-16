const urlConstants = {
  saveResumeUrl: '/resume',
  refreshTokenUrl: '/refresh',
  googleLoginUrl: '/auth/google',
  fetchResumeUrl: '/resume/:email',
  deleteResumeUrl: '/resume/delete',
  fetchUserProfileUrl: '/users/self',
  editResumeByAdminUrl: '/resume/edit/:email',
  apiBaseUrl: process.env.API_BASE_URL,
};

export default urlConstants;
