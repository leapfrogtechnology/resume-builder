import * as Yup from 'yup';

const validateProjectInformation = Yup.object().shape({
  name: Yup.string().label('Title of your Project').trim().min(10).max(30).required(),
  ongoing: Yup.boolean().label('Current work'),
  startDate: Yup.date().label('Start date').required(),
  endDate: Yup.date()
    .label('End Date')
    .when('ongoing', { is: true, otherwise: Yup.date().required('End Date is required') })
    .when('startDate', (startDate, schema) => startDate && schema.min(startDate)),
  type: Yup.string().required(),
  description: Yup.string().label('Roles and Responsibilities').notRequired().min(60).max(200),
});

export default validateProjectInformation;
