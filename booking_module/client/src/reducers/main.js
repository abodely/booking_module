import { combineReducers } from 'redux';
import accommodation from './AccommodationsAvailability';
import guests from './Guests';
import calendar from './Calendar';

const rootReducer = combineReducers({
  accommodation,
  guests,
  calendar,
});

export default rootReducer;
