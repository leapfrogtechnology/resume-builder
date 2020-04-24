import * as Yup from 'yup';

const validateAchievementInformation = Yup.object().shape({
  name: Yup.string().label('Title of your Achievement').trim().min(10).max(30).required(),
  date: Yup.date().label('Date of the achievement').required(),
  description: Yup.string().label('Describe your Achievements (optional)'),
});

export default validateAchievementInformation;
