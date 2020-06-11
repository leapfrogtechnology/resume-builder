/**
 * Order Array of object having property startDate and endDate in descending order.
 *
 * @param {*} data
 */
export const orderByEndDate = data => {
  data.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate) && new Date(b.endDate) - new Date(a.endDate);
  });

  return data;
};

export const orderByStartDate = data => {
  data.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  return data;
};

export const orderByDate = data => {
  return orderByEndDate(data.filter(value => value.endDate === '' || (value.endDate !== '' && value.ongoing))).concat(
    orderByStartDate(data.filter(value => value.endDate !== '' && !value.ongoing))
  );
};
