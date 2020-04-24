import * as Yup from 'yup';

const validateCertificateInformation = Yup.object().shape({
  name: Yup.string().label('Title of your Certificate').trim().min(10).max(30).required(),
  link: Yup.string().label('Link to this Certificate').trim().min(10).max(30).required(),
  date: Yup.date().label('Date you received the Certificate').required(),
  description: Yup.string().label('Describe this Certificate (optional)'),
});

export default validateCertificateInformation;
