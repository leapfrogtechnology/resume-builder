import * as Yup from 'yup';
import moment from 'moment';
import { linkCheck } from '~/common/constants';

const validateCertificateInformation = Yup.object().shape({
  name: Yup.string().label('Title of your Certificate').trim().min(10).max(50).required(),
  link: Yup.string()
    .label('Link to this Certificate')
    .trim()
    .max(200)
    .required()
    .test('test-name', 'Enter Valid Link', function (value) {
      const linkRegex = linkCheck;
      const isValidLink = linkRegex.test(value);

      if (!isValidLink) {
        return false;
      }

      return true;
    }),
  date: Yup.date()
    .label('Date you received the Certificate')
    .required('Date is required')
    .test('check-startdate', 'Date should not be later than current date', function (value) {
      if (moment(value).format('MMMM YYYY DD') > moment(new Date()).format('MMMM YYYY DD')) {
        return false;
      } else {
        return true;
      }
    }),
  description: Yup.string().label('Describe this Certificate (optional)'),
});

export default validateCertificateInformation;
