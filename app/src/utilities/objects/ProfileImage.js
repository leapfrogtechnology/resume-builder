export const getProfileImageObject = base64Img => {
  return {
    value: base64Img,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
