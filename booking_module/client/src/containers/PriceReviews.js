import { connect } from 'react-redux';
import PriceReviews from '../components/PriceReviews';

const mapStateToProps = store => ({
  price: store.accommodation.price_per_day,
  additionalGuestFee: store.accommodation.additional_guest_fee,
  overGuestThreshold: store.guests.overGuestThreshold,
  numReviews: store.accommodation.number_of_ratings,
  rating: store.accommodation.rating_score,
});

const PriceReviewsState = connect(mapStateToProps, null)(PriceReviews);

export default PriceReviewsState;
