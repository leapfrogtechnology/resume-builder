import * as Yup from 'yup';

const validateExperience = Yup.object().shape({
  value: Yup.number().label('Your proffessional experience').min(0).integer(),
  type: Yup.string().required('It is required'),
});

export default validateExperience;
