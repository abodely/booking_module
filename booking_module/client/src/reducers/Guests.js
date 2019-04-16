import {
  CHANGE_GUESTS,
  TOGGLE_GUEST_SELECTION,
  TOGGLE_INFANT_SELECTION,
  TOGGLE_GUEST_DROPDOWN,
} from '../actions/Guests';

const initialState = {
  numAdults: 1,
  numChildren: 0,
  numInfants: 0,
  overGuestThreshold: false,
  guestsSelected: false,
  infantsSelected: false,
  guestDropdown: false,
};

export default function guestReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GUESTS:
      return {
        ...state,
        [action.guestType]: action.num,
      };

    case TOGGLE_GUEST_SELECTION:
      return {
        ...state,
        guestsSelected: !state.guestsSelected,
        infantsSelected: false,
      };

    case TOGGLE_INFANT_SELECTION:
      return {
        ...state,
        infantsSelected: !state.infantsSelected,
        guestsSelected: false,
      };

    case TOGGLE_GUEST_DROPDOWN:
      return {
        ...state,
        guestDropdown: !state.guestDropdown,
        guestsSelected: !state.guestDropdown,
      };

    default:
      return state;
  }
}
