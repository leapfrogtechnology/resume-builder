import moment from 'moment';

const TOTAL_MONTH = 12;

export const format = date => {
  return moment(date).format('MMMM YYYY');
};

/**
 * Convert month to year and month
 *
 * @param {integer} monthCount
 * @returns {Object}
 */
export const getYearMonth = monthCount => {
  let m = monthCount % TOTAL_MONTH;
  let y = Math.floor(monthCount / TOTAL_MONTH);

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
 * GEt difference between two dates in years and months
 *
 * @param {Date} startDate - start date
 * @param {Date} endDate  - end date
 * @returns {Object} difference
 */
export const getDifferenceInYearMonth = (startDate, endDate) => {
  let a = moment(endDate);
  let b = moment(startDate);

  let years = a.diff(b, 'year');
  b.add(years, 'years');

  let months = a.diff(b, 'months');
  b.add(months, 'months');

  let difference = {
    year: years,
    month: months,
  };
  return difference;
};
