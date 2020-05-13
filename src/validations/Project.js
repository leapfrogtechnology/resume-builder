import * as Yup from 'yup';
import moment from 'moment';

const validateProjectInformation = Yup.object().shape({
  name: Yup.string().label('Title of your Project').trim().required(),
  ongoing: Yup.boolean().label('Current work'),
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
    .when('ongoing', { is: true, otherwise: Yup.date().required('End Date is required') })
    .when('startDate', (startDate, schema) => startDate && schema.min(startDate))
    .test('check-enddate', 'End Date should not be later than current date', function (value) {
      if (moment(value).format('MMMM YYYY DD') > moment(new Date()).format('MMMM YYYY DD')) {
        return false;
      } else {
        return true;
      }
    }),
  type: Yup.string().required(),
  description: Yup.string().label('Roles and Responsibilities'),
});

export default validateProjectInformation;
