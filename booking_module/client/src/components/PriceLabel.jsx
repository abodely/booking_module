import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const Price = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 800;
  font-size: ${theme.fonts.size[0]};
  line-height: ${theme.fonts.lineHeight};
  color: ${theme.fonts.color[0]};
  `;

const PerNight = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  line-height: ${theme.fonts.lineHeight[1]};
  color: ${theme.fonts.color[0]};
`;

const PriceLabel = ({ price, additionalGuestFee, overGuestThreshold }) => (
  <div id="bm-price-label-container">
    <Price>
      $
      { overGuestThreshold
        ? Math.ceil(price + additionalGuestFee)
        : Math.ceil(price)
      }
    </Price>
    <PerNight> per night</PerNight>
  </div>
);

export default PriceLabel;
