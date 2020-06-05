import * as Yup from 'yup';

const validatePersonalInformation = Yup.object().shape({
  name: Yup.string().label('Name').required(),
  role: Yup.string().label('Role').max(40, 'Limit 40 characters').required(),
  introduction: Yup.string().label('Introduction').max(200, 'Limit 200 characters').required(),
});

export default validatePersonalInformation;
