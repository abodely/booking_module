/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import GuestDropdown from './GuestDropdown';

const GuestContainer = styled.div`
  width: 100%;
  // Tech debt: may need margin when dropdown not rendered;
`;

const GuestLabel = styled.label`
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  color: ${theme.fonts.color[0]};
  line-height: ${theme.fonts.lineHeight[1]};
  font-family: ${theme.fonts.primary};
`;

const GuestButton = styled.button`
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
  width: 100%;
  height: 40px;
  // Tech debt: update border to 2 px on bottom when clicked (and remove when collapsed)
`;

const GuestArrow = styled.svg`
  height: 16px;
  width: 16px;
`;

const GuestTextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row no-wrap;
  justify-content; center;
`;

const GuestHighlighter = styled.span`
  height: 22px;

  // Tech debt: update on state implementation to add on-click effect;
  &:focus {
    padding: 4.25px 8.5px;
    border-radius: 3px;
    background-color: ${theme.palette.primary[6]};
    outline: none;
  }

`;

const GuestText = styled.span`
  width: 70px;
  margin: 0px;
  font-size: ${theme.fonts.size[1]};
  font-weight: 400;
  color: ${theme.fonts.color[0]};
  font-family: ${theme.fonts.primary};
`;

const DropDownContainer = styled.div`
  display: block;
  z-index: 2;
  width: 100%;
`;

const Guests = ({
  numGuests,
  numAdults,
  numChildren,
  numInfants,
  handleDropdownClick,
  guestDropdown,
  changeGuests,
  selectGuests,
  selectInfants,
  maxGuests,
}) => (
  <GuestContainer>
    <GuestLabel>Guests</GuestLabel>
    <GuestButton onClick={handleDropdownClick}>
      <GuestTextContainer>
        <GuestHighlighter>
          <GuestText id="bm-guest-label" onClick={() => selectGuests()}>
            {`${numGuests || 1} Guest${numGuests > 1 ? 's' : ''}`}
          </GuestText>
        </GuestHighlighter>
        <GuestHighlighter>
          <GuestText id="bm-infant-label" onClick={() => selectInfants()}>
            {numInfants ? (`, ${numInfants} Infant${numInfants > 1 ? 's' : ''}`) : ''}
          </GuestText>
        </GuestHighlighter>
      </GuestTextContainer>
      <GuestArrow viewBox="0 0 18 18">
        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
      </GuestArrow>
    </GuestButton>
    <DropDownContainer>
      {guestDropdown
        ? (
          <GuestDropdown
            handleDropdownClick={handleDropdownClick}
            numGuests={numGuests}
            numAdults={numAdults}
            numChildren={numChildren}
            numInfants={numInfants}
            changeGuests={changeGuests}
            maxGuests={maxGuests}
          />
        )
        : null}
    </DropDownContainer>
  </GuestContainer>
);


export default Guests;
