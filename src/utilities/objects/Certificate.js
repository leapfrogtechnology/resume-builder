export const getCertificateObject = ({ name, link, date, description }) => {
  return {
    name: name,
    link: link,
    date: date,
    description: description,
    hidden: false,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
