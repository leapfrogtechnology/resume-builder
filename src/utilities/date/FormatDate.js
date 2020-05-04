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
  const a = moment(endDate);
  const b = moment(startDate);

  const years = a.diff(b, 'year');

  b.add(years, 'years');

  const months = a.diff(b, 'months');

  b.add(months, 'months');

  const difference = {
    year: years,
    month: months,
  };

  return difference;
};

/**
 * Get Label for duration in years and months
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
    labelForDifference = diff.year > 1 ? diff.year.toString() + ' years' : diff.year.toString() + ' year';
    if (diff.month !== 0) {
      labelForDifference += ' and ';
    }
  }

  if (diff.month !== 0) {
    labelForDifference += diff.month > 1 ? diff.month.toString() + ' months' : diff.month.toString() + ' month';
  }

  return labelForDifference;
};
