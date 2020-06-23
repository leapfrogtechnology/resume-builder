import moment from "moment";

const TOTAL_MONTH = 12;

export const format = (date) => {
  return moment(date).format("MMMM YYYY");
};

/**
 * Convert month to year and month .
 *
 * @param {integer} monthCount
 * @returns {Object}
 */
export const getYearMonth = (monthCount) => {
  const m = monthCount % TOTAL_MONTH;
  const y = Math.floor(monthCount / TOTAL_MONTH);

  return { year: y, month: m };
};

export const getExperienceFormat = (experience) => {
  if (experience.type === "Year") {
    return { year: Number(experience.value), month: 0 };
  } else {
    const result = getYearMonth(experience.value);

    return { ...result };
  }
};

/**
 * Gett difference between two dates in years and months .
 *
 * @param {Date} startDate Start date.
 * @param {Date} endDate  End date.
 * @returns {Object} Difference.
 */
export const getDifferenceInYearMonth = (startDate, endDate) => {
  const formattedEndDate = moment(endDate);
  const formattedStartDate = moment(startDate);

  const years = formattedEndDate.diff(formattedStartDate, "year");

  formattedStartDate.add(years, "years");

  const months = formattedEndDate.diff(formattedStartDate, "months");

  formattedStartDate.add(months, "months");

  return {
    year: years,
    month: months,
  };
};

/**
 * Get Label for duration in years and months.
 *
 * @param {Date} startDate Start date.
 * @param {Date} endDate End date.
 * @param {bool} currentlyWorking Status if currently engaged or not.
 * @returns {string}
 */
export const getDifferenceYearMonth = (
  startDate,
  endDate,
  currentlyWorking
) => {
  let labelForDifference = "";

  const diff = getDifferenceInYearMonth(
    startDate,
    currentlyWorking ? new Date() : endDate
  );

  const years = timeWithSuffix(diff.year, "year");
  const months = timeWithSuffix(diff.month, "month");

  labelForDifference =
    years && months ? [years, months].join(" and ") : years ? years : months;

  return labelForDifference;
};

/**
 * Get Engagement tenure.
 *
 * @param {Date} startDate Start date.
 * @param {Date} endDate End date.
 * @param {bool} currentlyEngaged Boolean value indicating if currently engaged.
 * @returns {string}
 */
export const getEngagementTenure = (startDate, endDate, currentlyEngaged) => {
  const differenceInDate = getDifferenceYearMonth(
    startDate,
    endDate,
    currentlyEngaged
  );

  const postfixOne = currentlyEngaged ? "Present" : format(endDate);
  const postfixTwo = differenceInDate ? `( ${differenceInDate} )` : "";

  const labelForDate = `${format(startDate)}  -  ${postfixOne} ${postfixTwo}`;

  return labelForDate;
};

/**
 *
 * @param {number} value
 * @param {string} tag
 */
export const timeWithSuffix = (value, tag) => {
  switch (value) {
    case 0:
      return "";
    case 1:
      return value + " " + tag;
    default:
      return value + " " + tag + "s";
  }
};
