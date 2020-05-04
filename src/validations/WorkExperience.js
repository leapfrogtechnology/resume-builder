import * as Yup from 'yup';
import { emailCheck, phoneNumberCheck } from '~/common/constants';
import moment from 'moment';

const validateWorkExperience = Yup.object().shape({
  nameOrganization: Yup.string().label('Organization Name').trim().min(10).max(30).required(),
  position: Yup.string().label('Title/Position').max(40).required(),
  currentWork: Yup.boolean().label('Current work'),
  startDate: Yup.date()
    .label('Start date')
    .required()
    .test('check-startdate', 'Start Date should not be later than current date', function (value) {
      if (moment(value).format('MMMM YYYY DD') > moment(new Date()).format('MMMM YYYY DD')) {
        return false;
      } else {
        return true;
      }
    }),
  endDate: Yup.date()
    .label('End Date')
    .when('currentWork', { is: true, otherwise: Yup.date().required('End Date is required') })
    .when('startDate', (startDate, schema) => startDate && schema.min(startDate))
    .test('check-enddate', 'End Date should not be later than current date', function (value) {
      if (moment(value).format('MMMM YYYY DD') > moment(new Date()).format('MMMM YYYY DD')) {
        return false;
      } else {
        return true;
      }
    }),
  roles: Yup.string().label('Roles and Responsibilities').min(60).max(200).required(),
  achievements: Yup.string().label('Achievements and Tasks').max(150),
  nameReferee: Yup.string().label('Name of your Referee').min(10).max(35),
  contactReferee: Yup.string()
    .label('Email | Phone Number')
    .test('test-name', 'Enter Valid Phone number / Email', function (value) {
      if (value) {
        const emailRegex = emailCheck;
        const phoneRegex = phoneNumberCheck;
        const isValidEmail = emailRegex.test(value);
        const isValidPhone = phoneRegex.test(value);

        if (!isValidEmail && !isValidPhone) {
          return false;
        }
      }

      return true;
    }),
});

export { validateWorkExperience };
