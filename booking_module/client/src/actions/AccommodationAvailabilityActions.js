import { formatDate } from '../helpers/Dates';

export const FETCH_ACCOMMODATIONS_BEGIN = 'FETCH_ACCOMMODATIONS_BEGIN';
export const FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS';
export const FETCH_ACCOMMODATIONS_FAILURE = 'FETCH_ACCOMMODATIONS_FAILURE';
export const FETCH_AVAILABILITY_SUCCESS = 'FETCH_AVAILABILITY_SUCCESS';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchAccommodationsBegin = () => ({
  type: FETCH_ACCOMMODATIONS_BEGIN,
});

export const fetchAccommodationsSuccess = ({ accommodation, availability }) => ({
  type: FETCH_ACCOMMODATIONS_SUCCESS,
  payload: { accommodation, availability },
});

export const fetchAccommodationsFailure = error => ({
  type: FETCH_ACCOMMODATIONS_FAILURE,
  payload: { error },
});

export const fetchAccommodation = accommodationID => (
  (dispatch) => {
    dispatch(fetchAccommodationsBegin());
    return fetch(`/bookings/${accommodationID}/reserve`)
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        const availability = json.availability.reduce((acc, cv) => {
          acc[formatDate(new Date(`${cv.date} Z`))] = true;
          return acc;
        }, {});
        dispatch(fetchAccommodationsSuccess({ accommodation: json.accommodation, availability }));
        return { accommodation: json.accommodation, availability };
      })
      .catch(error => dispatch(fetchAccommodationsFailure(error)));
  });

export const fetchAvailabilitySuccess = ({ availability }) => ({
  type: FETCH_AVAILABILITY_SUCCESS,
  payload: { availability },
});

export const fetchAvailability = (
  startDate,
  endDate,
  accommodationID,
) => dispatch => (
  fetch(`/bookings/${accommodationID}/reserve/${startDate}&${endDate}`)
    .then(handleErrors)
    .then(res => res.json())
    .then((json) => {
      console.log(json);
      const availability = json.availability.reduce((acc, cv) => {
        acc[formatDate(new Date(`${cv.date} Z`))] = true;
        return acc;
      }, {});
      dispatch(fetchAvailabilitySuccess({ availability }));
      return { availability };
    })
    .catch(error => dispatch(fetchAccommodationsFailure(error)))
);
