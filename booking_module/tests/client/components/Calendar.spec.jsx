/* eslint-disable max-len */
import React from 'react';
import { shallow, mount } from 'enzyme';

// Components
import Calendar from '../../../client/src/components/Calendar';
import CalendarTable from '../../../client/src/components/CalendarTable';

describe('Calendar', () => {
  let wrapper = shallow(<Calendar />);
  wrapper = mount(<Calendar />);

  test('renders correct month and year as label', () => {
    wrapper.setProps({ currentMonth: 3, currentYear: 119 });
    expect(wrapper.find('span').text()).toEqual('April 2019');
  });
});

// describe('CalendarTable', () => {
//   let wrapper = shallow(<CalendarTable />);
//   wrapper = mount(<CalendarTable />);

//   test('renders blank spaces until the first day of the month', () => {
//     wrapper.setProps({ currentMonth: 3, currentYear: 119 });
//     expect(wrapper.find('span').text()).toEqual('April 2019');
//   });
// });
/*

Tests:

*   Rendering:
*     - renders correct Month, Year as label
*     - contains empty-cell days (for months that don't start on Sunday)
*     - renders all days, in numerical order
*     - correctly renders unavailable days
*     - correctly renders available days
*     - handles all months in the calendar year
*     - handles months in the calendar year for 4 years of previous/future history
*     - handles leap-years accurately
*     - handles re-render based on previous month
*     - handles re-render based on next month


*   Check-in/Check-out:
*     - On initial click--clicked component background color is blue; dropdown renders (note: access appropriate node's children to determine if render occurred)
*     - Clicking between components - changes location of svg arrow and which cell is highlighted appropriately
*     - After selecting a check-in date: a) field updates with selected date, b) SVG arrow changes to check-out selection, c) check-out field highlights (and highlight from check-in removed), d) price refreshes (opt.)
*     - During check-out selection: hover highlights all days between check-in and check-out
*     - On check-out selection: close dropdown, remove highlight from check-out, update check-out label


*   Extra-Credit:
*     - Labels accept entries and re-render based on input
*/
