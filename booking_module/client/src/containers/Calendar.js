import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from '../components/Calendar';
import { fetchAvailability } from '../actions/AccommodationAvailabilityActions';
import {
  toggleCalendar,
  changeCheckIn,
  changeCheckOut,
  changeMonth,
} from '../actions/Calendar';

const mapStateToProps = store => ({
  minStay: store.accommodation.minimum_stay_length,
  lastAvailable: store.accommodation.availability_end_date,
  availability: store.accommodation.availability,
  checkInDate: store.calendar.checkInDate,
  checkOutDate: store.calendar.checkOutDate,
  currentDay: store.calendar.currentDay,
  currentMonth: store.calendar.currentMonth,
  currentYear: store.calendar.currentYear,
  checkInSelected: store.calendar.checkInSelected,
  checkOutSelected: store.calendar.checkOutSelected,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleCalendar,
    changeCheckIn,
    changeCheckOut,
    changeMonth,
    fetchAvailability,
  }, dispatch)
);

const CalendarContainerState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainerState;
