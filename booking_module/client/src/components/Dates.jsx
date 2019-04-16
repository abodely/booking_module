import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const DateMargin = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const DateLabel = styled.label`
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  color: ${theme.fonts.color[0]};
  line-height: ${theme.fonts.lineHeight[1]};
  font-family: ${theme.fonts.primary};
`;

const DateContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${theme.palette.background};
  margin: 0px;
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
`;

const Arrow = styled.svg`
  padding: 8px 0px 8px 0px;
  height: 24px;
  width: 24px;
`;

const DateSelector = styled.div`
  width: 43%;
  line-height: 24px;
  padding: 8px;
`;

const DateInput = styled.input`
  padding: 4px 0px 0px 0px;
  font-size: ${theme.fonts.size[1]};
  font-weight: 400;
  color: ${theme.fonts.color[0]};
  font-family: ${theme.fonts.primary};
  border: 0px;
  width: 100%;
  border-radius: 2px;

  & :focus {
    background-color: ${theme.palette.primary[6]};
    outline: none;
  }
`;

const Dates = ({ checkInDate, checkOutDate, toggleCalendar }) => (
  <DateMargin>
    <DateLabel> Dates </DateLabel>
    <DateContainer>
      <DateSelector>
        <DateInput placeholder="Check In" value={checkInDate || 'Check In'} onClick={() => toggleCalendar()} />
      </DateSelector>
      <Arrow viewBox="0 0 24 24">
        <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
      </Arrow>
      <DateSelector>
        <DateInput placeholder="Check Out" value={checkOutDate || 'Check Out'} />
      </DateSelector>
    </DateContainer>
  </DateMargin>
);

export default Dates;
