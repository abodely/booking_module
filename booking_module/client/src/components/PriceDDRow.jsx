/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const PriceContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 4px 0px;
  width: 100%;
`;

const PriceRowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

const SubTotalContainer = styled.div`
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fonts.size[2]};
  font-weight: 400;
  color: ${theme.fonts.color[0]};
  line-height: ${theme.fonts.lineHeight[0]};
`;

const TotalContainer = styled(SubTotalContainer)`
  font-weight: 700;
`;

const BottomBorder = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
`;

const PriceDDRow = ({ label, price, Total = false }) => (
  <PriceContainer>
    <PriceRowContainer>
      <PriceContainer>
        {Total
          ? (
            <TotalContainer>
              {label}
            </TotalContainer>
          )
          : (
            <SubTotalContainer>
              {label}
            </SubTotalContainer>
          )
        }
      </PriceContainer>
      {Total
        ? (
          <TotalContainer>
            {price}
          </TotalContainer>
        )
        : (
          <SubTotalContainer>
            {price}
          </SubTotalContainer>
        )
        }
    </PriceRowContainer>
    <PriceContainer>
      <BottomBorder />
    </PriceContainer>
  </PriceContainer>
);

export default PriceDDRow;
