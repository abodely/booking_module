import React from 'react';
import { shallow, mount } from 'enzyme';

// Components
import PriceLabel from '../../../client/src/components/PriceLabel';

describe('Price-per-night label', () => {
  let wrapper = shallow(<PriceLabel />);
  wrapper = mount(<PriceLabel />);

  test('should render two-digit prices', () => {
    wrapper.setProps({price: 55 });
    expect(wrapper.text()).toEqual('$55 per night');
  });

  test('should render three-digit prices', () => {
    wrapper.setProps({price: 555 });
    expect(wrapper.text()).toEqual('$555 per night');
  });

  test('should render four-digit prices', () => {
    wrapper.setProps({price: 5555 });
    expect(wrapper.text()).toEqual('$5555 per night');
  });

  // TODO: add updates-on
});

/*

Tests:

*   Price-per-night (Label):

*     - Updates on:
*        - Date selection
*        - Number of guests (selection of one more or one-less adult/child) -- renders max guest fee when it should, doesn't when it shouldn't

*     - Renders two, three, and four digit prices without issues

*   Price Breakout:

*     Price Calculation:
*        - Renders the correct amount of nights and price per-night for:
*            - single-night, within guest limit
*            - single-night, over guest limit (update price with max guest fee)
*            - multiple-nights, within guest limit
*            - multiple-nights, over guest limit (update price with max guest fee)
*            - updates number of nights after entering a larger check-in/check-out time-frame
*       - Includes itemization in pop-up (TODO: Build add'l tests later)

*   Cleaning Fee:

*     - Renders when property contains cleaning-fee
*     - Does not render when property does not contain cleaning-fee
*     - Pop-up renders with a description of cleaning-fee

*   Taxes:

*     - Renders when property contains at least one tax
*     - Does not render when property does not contain any tax
*     - Handles aggregation and display of total tax when multiple taxes apply
*     - Pop-up renders with a description of tax(es)

*    Service Fee:

*     - Calculates Service Fee percentage accurately
*     - Pop-up renders with a description of Service Fee

*    Total

*     - Shows accurate total for:
*            - single-night, within guest limit with cleaning and service fees
*            - single-night, over guest limit (update price with max guest fee), without cleaning fee but including service fee
*            - multiple-nights, within guest limit with state tax, cleaning, and service fees
*            - multiple-nights, over guest limit (update price with max guest fee) with all fees
*            - updates number of nights after entering a larger check-in/check-out time-frame
*/