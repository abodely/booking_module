export const CHANGE_GUESTS = 'CHANGE_GUESTS';
export const TOGGLE_GUEST_SELECTION = 'TOGGLE_GUEST_SELECTION';
export const TOGGLE_INFANT_SELECTION = 'TOGGLE_INFANT_SELECTION';
export const TOGGLE_GUEST_DROPDOWN = 'TOGGLE_GUEST_DROPDOWN';

export const changeGuests = (guestType, num) => ({
  type: CHANGE_GUESTS,
  guestType,
  num,
});

export const guestSelected = () => ({
  type: TOGGLE_GUEST_SELECTION,
});

export const infantsSelected = () => ({
  type: TOGGLE_INFANT_SELECTION,
});

export const toggleGuestDropdown = () => ({
  type: TOGGLE_GUEST_DROPDOWN,
});
