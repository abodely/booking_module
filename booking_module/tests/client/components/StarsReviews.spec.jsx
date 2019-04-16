import React from 'react';
import { shallow, mount } from 'enzyme';

// Components
import { Stars, FullStar, HalfStar, EmptyStar } from '../../../client/src/components/Stars';
import { Reviews } from '../../../client/src/components/Reviews';

/*

Tests:

*   Stars

*     - Calculates and renders 5 stars
*     - Calculates and renders 3.5 stars
*     - Calculates and renders 0 stars

*   Reviews (Label):

*     - Renders 2-digit no. of reviews accurately
*     - Renders 3-digit no. of reviews accurately
*     - Renders 4-digit no. of reviews accurately

*/

describe('Stars', () => {

  let wrapper = shallow(<Stars />);
  wrapper = mount(<Stars />);
  let expectedStars = [];


  test('should update props with rating', () => {
    expect('rating' in wrapper.props()).toEqual(false);
    wrapper.setProps({ rating: 5 });
    expect(wrapper.prop('rating')).toEqual(5);
  });

  test('should render 5 stars correctly', () => {
    for (let i = 0; i < 5; i += 1) {
      expectedStars.push(FullStar());
    }
    expect(wrapper.containsAllMatchingElements(expectedStars)).toEqual(true);
    expectedStars = [];
  });

  test('should render 3.5 stars correctly', () => {
    wrapper.setProps({ rating: 3.5 });

    for (let i = 0; i < 3; i += 1) {
      expectedStars.push(FullStar());
    }
    expectedStars.push(HalfStar());
    expectedStars.push(EmptyStar());

    expect(wrapper.containsAllMatchingElements(expectedStars)).toEqual(true);
    expectedStars = [];
  });

  test('should render 0 stars correctly', () => {
    wrapper.setProps({ rating: 0 });

    for (let i = 0; i < 5; i += 1) {
      expectedStars.push(EmptyStar());
    }
    expect(wrapper.containsAllMatchingElements(expectedStars)).toEqual(true);
  });
});


describe('Reviews', () => {
  let wrapper = shallow(<Reviews />);
  wrapper = mount(<Reviews />);

  test('should accept a numReviews property', () => {
    expect('numReviews' in wrapper.props()).toEqual(false);
    wrapper.setProps({ numReviews: 55 });
    expect(wrapper.prop('numReviews')).toEqual(55);
  });

  test('should correctly render a two-digit number of reviews', () => {
    expect(wrapper.last().text()).toEqual(' 55');
  });

  test('should correctly render a three-digit number of reviews', () => {
    wrapper.setProps({ numReviews: 555 });
    expect(wrapper.last().text()).toEqual(' 555');
  });

  test('should correctly render a four-digit number of reviews', () => {
    wrapper.setProps({ numReviews: 5555 });
    expect(wrapper.last().text()).toEqual(' 5555');
  });
});
