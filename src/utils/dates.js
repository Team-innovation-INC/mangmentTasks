const currentDate = new Date();
export const dayOfWeek = currentDate.getDate();
currentDate.setDate(0);
export const daysOfMonth = currentDate.getDate();

export const month = currentDate.getMonth();

const monthsOfYear = [
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
  'December'
];
export function CurrentMonth() {
  return monthsOfYear[month + 1] || '';
}
