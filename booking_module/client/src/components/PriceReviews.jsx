import React from 'react';
import styled from 'styled-components';
import PriceLabel from './PriceLabel';
import { Reviews } from './Reviews';
import theme from './themes/default';

const LineBreak = styled.div`
  margin: 15px 3px;
  border-bottom: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
`;

const PriceReview = ({
  price,
  additionalGuestFee,
  overGuestThreshold,
  numReviews,
  rating,
}) => (
  <div id="bm-price-review-container">
    <PriceLabel
      price={price}
      additionalGuestFee={additionalGuestFee}
      overGuestThreshold={overGuestThreshold}
    />
    <Reviews numReviews={numReviews} rating={rating} />
    <LineBreak />
  </div>
);

export default PriceReview;
