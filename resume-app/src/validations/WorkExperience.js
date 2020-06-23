import * as Yup from "yup";
import { emailCheck, phoneNumberCheck } from "common/constants";
import moment from "moment";

const validateWorkExperience = Yup.object().shape({
  nameOrganization: Yup.string().label("Organization Name").trim().required(),
  position: Yup.string().label("Title/Position").required(),
  currentWork: Yup.boolean().label("Current work"),
  startDate: Yup.date()
    .label("Start date")
    .required()
    .test(
      "check-startdate",
      "Start Date should not be later than current date",
      function (value) {
        if (moment(value) > moment(new Date())) {
          return false;
        } else {
          return true;
        }
      }
    ),
  endDate: Yup.date()
    .label("End Date")
    .when("currentWork", {
      is: true,
      otherwise: Yup.date().required("End Date is required"),
    })
    .when(
      "startDate",
      (startDate, schema) => startDate && schema.min(startDate)
    )
    .test(
      "check-enddate",
      "End Date should not be later than current date",
      function (value) {
        if (moment(value) > moment(new Date())) {
          return false;
        } else {
          return true;
        }
      }
    ),
  roles: Yup.string().label("Roles and Responsibilities").required(),
  achievements: Yup.string().label("Achievements and Tasks"),
  nameReferee: Yup.string().label("Name of your Referee").trim(),
  contactReferee: Yup.string()
    .label("Email | Phone Number")
    .test("test-name", "Enter Valid Phone number / Email", function (value) {
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
