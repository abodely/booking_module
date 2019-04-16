import { connect } from 'react-redux';
import PriceDropdown from '../components/PriceDropdown';

const mapStateToProps = store => ({
  price: store.accommodation.price_per_day,
  additionalGuestFee: store.accommodation.additional_guest_fee,
  overGuestThreshold: store.guests.overGuestThreshold,
  checkInDate: store.calendar.checkInDate,
  checkOutDate: store.calendar.checkOutDate,
  cleaningFee: store.accommodation.cleaning_fee,
  accommodationTax: store.accommodation.accommodations_tax,
  generalTax: store.accommodation.general_tax,
});

const PriceDropdownContainerState = connect(mapStateToProps, null)(PriceDropdown);

export default PriceDropdownContainerState;
