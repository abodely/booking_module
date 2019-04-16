import { nextMonth, prevMonth } from '../helpers/Dates';
import {
  CHANGE_CHECKIN,
  CHANGE_CHECKOUT,
  CHANGE_MONTH,
  TOGGLE_CALENDAR,
} from '../actions/Calendar';

const initialState = {
  checkInDate: null,
  checkOutDate: null,
  currentDay: new Date().getDate(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getYear(),
  checkInSelected: false,
  checkOutSelected: false,
  priceListDisplay: false,
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHECKIN:
      return {
        ...state,
        checkInDate: action.date,
        checkInSelected: false,
        checkOutSelected: true,
        checkOutDate: null,
      };

    case CHANGE_CHECKOUT:
      return {
        ...state,
        checkOutDate: action.date,
        checkOutSelected: false,
      };

    case CHANGE_MONTH:
      if (action.command === 'increase') {
        return {
          ...state,
          currentMonth: nextMonth(state.currentMonth, state.currentYear)[0],
          currentYear: nextMonth(state.currentMonth, state.currentYear)[1],
        };
      }
      return {
        ...state,
        currentMonth: prevMonth(state.currentMonth, state.currentYear)[0],
        currentYear: prevMonth(state.currentMonth, state.currentYear)[1],
      };

    case TOGGLE_CALENDAR:
      return {
        ...state,
        checkInSelected: true,
        checkOutSelected: false,
      };

    default:
      return state;
  }
}
