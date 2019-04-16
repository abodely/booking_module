import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import BookingForm from './BookingForm';
import PriceReviewState from '../containers/PriceReviews';

const BookingBox = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${theme.palette.background};
  margin: 0px;
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
`;

const Spacer = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const BookingContainer = () => (
  <BookingBox>
    <Spacer>
      <div id="bm-booking-content">
        <PriceReviewState />
        <BookingForm />
      </div>
    </Spacer>
  </BookingBox>
);

export default BookingContainer;
