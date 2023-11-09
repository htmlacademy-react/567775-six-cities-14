const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const useDate = (date: string | Date) => {
  const dateValue = new Date(date);
  const getDay = dateValue.getDay();
  const getYear = dateValue.getFullYear();
  const getMonth = dateValue.getMonth();
  const getMonthText = monthNames[dateValue.getMonth()];

  return { getDay, getYear, getMonthText, getMonth };
};
