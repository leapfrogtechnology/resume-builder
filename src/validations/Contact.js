import * as Yup from 'yup';
import { emailCheck, phoneNumberCheck } from '~/common/constants';

const validateContactInformation = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .required('Email is required')
    .test('test-name', 'Enter a valid Email', function (value) {
      const emailRegex = emailCheck;
      const isValidEmail = emailRegex.test(value);

      if (!isValidEmail) {
        return false;
      }

      return true;
    }),
  phone: Yup.number()
    .label('Phone Number')
    .test('test-name', 'Enter a valid Phone Number', function (value) {
      const phoneRegex = phoneNumberCheck;
      const isValidPhone = phoneRegex.test(value);

      if (!isValidPhone) {
        return false;
      }

      return true;
    }),
  gitHub: Yup.string().label('Github Profile'),
  stackOverFlow: Yup.string().label('StackOverflow profile'),
  linkedIn: Yup.string().label('LinkedIn profile'),
});

export default validateContactInformation;
