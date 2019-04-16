export const CHANGE_CHECKIN = 'CHANGE_CHECKIN';
export const CHANGE_CHECKOUT = 'CHANGE_CHECKOUT';
export const CHANGE_MONTH = 'CHANGE_MONTH';
export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR';

export const toggleCalendar = () => ({
  type: TOGGLE_CALENDAR,
});

export const changeCheckIn = date => ({
  type: CHANGE_CHECKIN,
  date,
});

export const changeCheckOut = date => ({
  type: CHANGE_CHECKOUT,
  date,
});

export const changeMonth = command => ({
  type: CHANGE_MONTH,
  command,
});
