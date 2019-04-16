export const DateData = [
  { month: 'January', numDays: 31 },
  { month: 'February', numDays: 28 },
  { month: 'March', numDays: 31 },
  { month: 'April', numDays: 30 },
  { month: 'May', numDays: 31 },
  { month: 'June', numDays: 30 },
  { month: 'July', numDays: 31 },
  { month: 'August', numDays: 31 },
  { month: 'September', numDays: 30 },
  { month: 'October', numDays: 31 },
  { month: 'November', numDays: 30 },
  { month: 'December', numDays: 31 },
];

export const formatDate = (date) => {
  const d = new Date(date);
  let month = `${(d.getMonth() + 1)}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export const daysBetween = (checkInDate, checkOutDate) => (
  ((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) + 1
);

export const nextMonth = (month, year) => (month === 11 ? [0, year + 1] : [month + 1, year]);

export const prevMonth = (month, year) => (month === 0 ? [11, year - 1] : [month - 1, year]);

export const getCheckInDay = date => (date.slice(8)[0] !== 0 ? Number(date.slice(8)) : Number(date.slice(9)));
