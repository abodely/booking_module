/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { shallow, mount } from 'enzyme';

// Components:
import Guests from '../../../client/src/components/Guests';
import GuestDropdown from '../../../client/src/components/GuestDropdown';

/*

Tests:

*   Guest Counter (Label):

*     - Starts with num guests selected in state (default 1)

*     - Updates guest counter when:
*        - Adults increased
*        - Adults decreased
*        - Children increased
*        - Children decreased

*     - Can handle single, double digit renders
*     - Correctly highlights on click (and opens drop-down panel)

*   Infant Counter (Label):

*     - Updates infant counter when:
*        - Infants increased
*        - Infants decreased

*   - Highlights on selection
*   - Defaults to zero

*   Incrementers (+ & - Buttons):

*     - Increments state of guests, childrenm and adults or infants on increase/decrease

*     - Performs validation (and correctly change button to greyed out) to prevent :
*       - Less than one adult
*       - More than five infants
*       - More children and adults combined than number of max guests
*       - Less than 0 children or infants

*   Close Button

*     - Closes dropdown and modifies state appropriately

*/

describe('Guest Counter', () => {
  let wrapper = shallow(<Guests />);
  wrapper = mount(<Guests />);
  let dropdownWrapper = shallow(<GuestDropdown />);
  dropdownWrapper = mount(<GuestDropdown />);

  test('if no guests are present, should start with 1 guest', () => {
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('1 Guest');
  });

  test('should start with the number of guests currently selected', () => {
    wrapper.setProps({ numGuests: 3 });
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('3 Guests');
  });

  test('handles double-digit guest renders', () => {
    wrapper.setProps({ numGuests: 11 });
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('11 Guests');
  });

  test.skip('should increase counter when adults are increased', () => {
    wrapper.setProps({ numGuests: 3 });
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('3 Guests');
    dropdownWrapper.filter('button').at(1).simulate('click');
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('4 Guests');
  });

  test.skip('should increase counter when adults are decreased', () => {
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('4 Guests');
    dropdownWrapper.filter('button').at(0).simulate('click');
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('3 Guests');
  });

  test.skip('should increase counter when children are increased', () => {
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('3 Guests');
    dropdownWrapper.filter('button').at(3).simulate('click');
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('4 Guests');
  });

  test.skip('should increase counter when children are decreased', () => {
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('4 Guests');
    dropdownWrapper.filter('button').at(2).simulate('click');
    expect(wrapper.find('#bm-guest-label').find('span').text()).toEqual('3 Guests');
  });

  test.skip('should highlight on-click and render GuestDropdown', () => {
    wrapper.setProps({ selected: false });
    expect(wrapper.prop('selected')).toEqual('false');
    wrapper.find('#bm-guest-label').find('span').simulate('click');
    expect(wrapper.prop('selected')).toEqual('true');
  });
});

describe('Infant Counter', () => {
  let wrapper = shallow(<Guests />);
  wrapper = mount(<Guests />);
  let dropdownWrapper = shallow(<GuestDropdown />);
  dropdownWrapper = mount(<GuestDropdown />);

  test('should not render text if there are no infants selected', () => {
    expect(wrapper.find('#bm-infant-label').find('span').text()).toEqual('');
  });

  test('should start with the number of infants currently selected', () => {
    wrapper.setProps({ numInfants: 3 });
    expect(wrapper.find('#bm-infant-label').find('span').text()).toEqual(', 3 Infants');
  });

  test.skip('should increase counter when infants are increased', () => {
    wrapper.setProps({ numInfants: 3 });
    expect(wrapper.find('#bm-infant-label').find('span').text()).toEqual(', 3 Infants');
    dropdownWrapper.filter('button').at(1).simulate('click');
    expect(wrapper.find('#bm-infant-label').find('span').text()).toEqual(', 4 Infants');
  });

  test.skip('should increase counter when infants are decreased', () => {
    expect(wrapper.find('#bm-infant-label').find('span').text()).toEqual(', 4 Infants');
    dropdownWrapper.filter('button').at(0).simulate('click');
    expect(wrapper.find('#bm-infant-label').find('span').text()).toEqual(', 3 Infants');
  });

  test.skip('should highlight on-click and render GuestDropdown', () => {
    wrapper.setProps({ selected: false });
    expect(wrapper.prop('selected')).toEqual('false');
    wrapper.find('#bm-infant-label').find('span').simulate('click');
    expect(wrapper.prop('selected')).toEqual('true');
  });
});

describe('Adults Incrementer', () => {
  let wrapper = shallow(<GuestDropdown />);
  wrapper = mount(<GuestDropdown />);

  test('label changes as props are modified', () => {
    wrapper.setProps({ numAdults: 2, numChildren: 1, numInfants: 1 });
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('2');
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('1');
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('1');
    wrapper.setProps({ numAdults: 3, numChildren: 2, numInfants: 2 });
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('3');
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('2');
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('2');
  });

  test.skip('increases number of adults when + is clicked', () => {
    wrapper.setProps({ adults: 1 });
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('1');
    wrapper.find('#bm-adults-increase-button').simulate('click');
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('2');
  });

  test.skip('decreases number of adults when - is clicked', () => {
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('2');
    wrapper.find('#bm-adults-decrease-button').simulate('click');
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('1');
  });

  test.skip('increases number of children when + is clicked', () => {
    wrapper.setProps({ children: 0 });
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('0');
    wrapper.find('#bm-children-increase-button').simulate('click');
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('1');
  });

  test.skip('decreases number of children when - is clicked', () => {
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('1');
    wrapper.find('#bm-children-decrease-button').simulate('click');
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('0');
  });

  test.skip('increases number of infants when + is clicked', () => {
    wrapper.setProps({ infants: 0 });
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('0');
    wrapper.find('#bm-infants-increase-button').simulate('click');
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('1');
  });

  test.skip('decreases number of infants when - is clicked', () => {
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('1');
    wrapper.find('#bm-infants-decrease-button').simulate('click');
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('0');
  });

  test.skip('should not allow more than 5 infants', () => {
    wrapper.setProps({ infants: 5 });
    wrapper.find('#bm-infants-increase-button').simulate('click');
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('5');
  });

  test.skip('prevents adults from being reduced below 1, children below 0, and infants below 0', () => {
    wrapper.setProps({ adults: 1, children: 0, infants: 0 });
    wrapper.find('#bm-adults-decrease-button').simulate('click');
    wrapper.find('#bm-children-decrease-button').simulate('click');
    wrapper.find('#bm-infants-decrease-button').simulate('click');
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('1');
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('0');
    expect(wrapper.find('span').find('#bm-infants-count-label').text()).toEqual('0');
  });

  test.skip('prevents more children and adults from being selected than maximum guests allowed', () => {
    wrapper.setProps({ maxGuests: 7, adults: 5, childen: 2 });
    wrapper.find('#bm-adults-increase-button').simulate('click');
    wrapper.find('#bm-children-increase-button').simulate('click');
    expect(wrapper.find('span').find('#bm-adults-count-label').text()).toEqual('5');
    expect(wrapper.find('span').find('#bm-children-count-label').text()).toEqual('2');
  });
});

// TODO: Close button Test
