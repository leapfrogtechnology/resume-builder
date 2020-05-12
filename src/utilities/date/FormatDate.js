import moment from 'moment';

const TOTAL_MONTH = 12;

export const format = date => {
  return moment(date).format('MMMM YYYY');
};

/**
 * Convert month to year and month .
 *
 * @param {integer} monthCount
 * @returns {Object}
 */
export const getYearMonth = monthCount => {
  const m = monthCount % TOTAL_MONTH;
  const y = Math.floor(monthCount / TOTAL_MONTH);

  return { year: y, month: m };
};

export const getExperienceFormat = experience => {
  if (experience.type === 'Year') {
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

  const years = formattedEndDate.diff(formattedStartDate, 'year');

  formattedStartDate.add(years, 'years');

  const months = formattedEndDate.diff(formattedStartDate, 'months');

  formattedStartDate.add(months, 'months');

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
export const getDifferenceYearMonth = (startDate, endDate, currentlyWorking) => {
  let labelForDifference = '';

  const diff = getDifferenceInYearMonth(startDate, currentlyWorking ? new Date() : endDate);

  if (diff.year !== 0) {
    labelForDifference = diff.year > 1 ? `${diff.year} years ` : `${diff.year} year `;
    if (diff.month !== 0) {
      labelForDifference += ' and ';
    }
  }

  if (diff.month !== 0) {
    labelForDifference += diff.month > 1 ? ` ${diff.month} months` : ` ${diff.month} month`;
  }

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
  const differenceInDate = getDifferenceYearMonth(startDate, endDate, currentlyEngaged);

  const postfixOne = currentlyEngaged ? 'Present' : moment(endDate).format('MMMM YYYY');
  const postfixTwo = differenceInDate ? `( ${differenceInDate} )` : '';

  const labelForDate = `${moment(startDate).format('MMMM YYYY')}  -  ${postfixOne} ${postfixTwo}`;

  return labelForDate;
};

/**
 * Get Label for total experience when experience in year and month is given.
 *
 * @param {object} experienceTime Exprience in year and month.
 */
export const getExperienceLabel = experienceTime => {
  let experienceLabel = '';

  if (experienceTime.year === 0 && experienceTime.month === 0) {
    experienceLabel = '';
  } else {
    if (experienceTime.year === 0) {
      experienceLabel = '';
    } else if (experienceTime.year === 1) {
      experienceLabel = `${experienceTime.year}  year `;
    } else {
      experienceLabel = `${experienceTime.year} years `;
    }
    if (experienceTime.month === 1) {
      experienceLabel += `${experienceTime.month} month `;
    } else {
      experienceLabel += `${experienceTime.month} months `;
    }
  }

  return experienceLabel;
};

/**
 *
 * @param {number} value
 * @param {string} tag
 */
export const timeWithSuffix = (value, tag) => {
  switch (value) {
    case 0:
      return '';
      break;
    case 1:
      return value + ' ' + tag;
      break;
    default:
      return value + ' ' + tag + 's';
      break;
  }
};
