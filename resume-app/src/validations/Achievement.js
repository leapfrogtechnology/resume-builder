import * as Yup from "yup";
import moment from "moment";

const validateAchievementInformation = Yup.object().shape({
  name: Yup.string().label("Title of your Achievement").required(),
  date: Yup.date()
    .label("Date of the achievement")
    .required("Date is required")
    .test(
      "check-startdate",
      "Date should not be later than current date",
      function (value) {
        if (moment(value) > moment(new Date())) {
          return false;
        } else {
          return true;
        }
      }
    ),
  description: Yup.string().label("Describe your Achievements (optional)"),
});

export default validateAchievementInformation;
