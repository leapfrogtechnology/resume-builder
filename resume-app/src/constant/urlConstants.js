const urlConstants = {
  refreshTokenUrl: "/refresh",
  googleLoginUrl: "/auth/google",
  deleteResumeUrl: "/resume/delete",
  saveResumeUrl: "/resume/self/save",
  fetchUserProfileUrl: "/users/self",
  fetchResumeUrl: "/resume/:email/preview",
  editResumeByAdminUrl: "/resume/:email/edit",
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
};

export default urlConstants;
