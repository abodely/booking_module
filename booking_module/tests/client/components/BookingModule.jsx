import React from 'react';
import { shallow, mount } from 'enzyme';
import '@babel/polyfill';

// Components
import BookingModule from '../../../client/src/components/BookingModule';


describe('Booking Module', () => {
  let wrapper = shallow(<BookingModule />);
  wrapper = mount(<BookingModule />);

  // test('should  a BookingContainer component', () => {
  //   console.log(wrapper.props());
  //   expect(wrapper.find('BookingContainer').exists()).toBe(true);
  // });
});
