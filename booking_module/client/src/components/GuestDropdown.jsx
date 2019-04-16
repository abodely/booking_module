/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

// eslint-disable-next-line max-len
// Note: Will re-factor after initial front-end buildout. Candidate for sub-components. Also fix absolute positioning to work more cleanly.

const DropdownContainer = styled.div`
  width: 356px;
  padding: 0px 16px;
  border-radius: 3px;
  display: flex;
  flex-flow: row wrap;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  min-width: 280px;
  z-index: 2;
  position: absolute;
  background-color: ${theme.palette.background};
`;

const AdultsContainer = styled.div`
  height: 34px;
  margin: 16px 0px;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const ChildrenInfantsContainer = styled(AdultsContainer)`
  height: 44px;
  margin: 24px 0px;
`;

const GuestLabelContainer = styled.div`
  width 70%;
  display: flex;
  flex-flow: row wrap;
`;

const GuestLabel = styled.span`
  font-size: ${theme.fonts.size[1]};
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  color: ${theme.fonts.color[0]};
  width: 100%;
`;

const SubLabel = styled(GuestLabel)`
  font-weight: 400;
  font-size: ${theme.fonts.size[2]};
`;

const GuestCountContainer = styled.div`
  width: 120px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-height: 34px;
`;

const GuestCountButton = styled.button`
  border-radius: 50%;
  border: ${theme.palette.primary[3]} solid 1px;
`;

const GuestCountSVG = styled.svg`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const GuestCountLabel = styled(GuestLabel)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CloseButtonContainer = styled(FooterContainer)`
  flex-flow: row-reverse;
  width: 100%;
`;

const CloseButton = styled.button`
  font-size: ${theme.fonts.size[1]};
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  color: ${theme.fonts.color[0]};
  border: 0px;

  & :hover {
    text-decoration: underline;
  }
`;

const GuestDropdown = ({
  maxGuests,
  numAdults = 1,
  numChildren = 0,
  numInfants = 0,
  handleDropdownClick,
  changeGuests,
}) => (
  <DropdownContainer>
    <AdultsContainer>
      <GuestLabelContainer>
        <GuestLabel>Adults</GuestLabel>
      </GuestLabelContainer>
      <GuestCountContainer>
        <GuestCountButton
          onClick={(e) => {
            e.preventDefault();
            if (numAdults > 1) changeGuests('numAdults', numAdults - 1);
          }}
        >
          <GuestCountSVG viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </GuestCountSVG>
        </GuestCountButton>
        <GuestCountLabel id="bm-adults-count-label">
          {numAdults}
        </GuestCountLabel>
        <GuestCountButton
          onClick={(e) => {
            e.preventDefault();
            if (numAdults + numChildren < maxGuests) changeGuests('numAdults', numAdults + 1);
          }}
        >
          <GuestCountSVG viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </GuestCountSVG>
        </GuestCountButton>
      </GuestCountContainer>
    </AdultsContainer>
    <ChildrenInfantsContainer>
      <GuestLabelContainer>
        <GuestLabel>Children</GuestLabel>
        <SubLabel>Ages 2–12</SubLabel>
      </GuestLabelContainer>
      <GuestCountContainer>
        <GuestCountButton
          onClick={(e) => {
            e.preventDefault();
            if (numChildren > 0) changeGuests('numChildren', numChildren - 1);
          }}
        >
          <GuestCountSVG viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </GuestCountSVG>
        </GuestCountButton>
        <GuestCountLabel id="bm-children-count-label">
          {numChildren}
        </GuestCountLabel>
        <GuestCountButton
          onClick={(e) => {
            e.preventDefault();
            if (numAdults + numChildren < maxGuests) changeGuests('numChildren', numChildren + 1);
          }}
        >
          <GuestCountSVG viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </GuestCountSVG>
        </GuestCountButton>
      </GuestCountContainer>
    </ChildrenInfantsContainer>
    <ChildrenInfantsContainer>
      <GuestLabelContainer>
        <GuestLabel>Infants</GuestLabel>
        <SubLabel>Under 2</SubLabel>
      </GuestLabelContainer>
      <GuestCountContainer>
        <GuestCountButton
          onClick={(e) => {
            e.preventDefault();
            if (numInfants > 0) changeGuests('numInfants', numInfants - 1);
          }}
        >
          <GuestCountSVG viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </GuestCountSVG>
        </GuestCountButton>
        <GuestCountLabel id="bm-infants-count-label">
          {numInfants}
        </GuestCountLabel>
        <GuestCountButton
          onClick={(e) => {
            e.preventDefault();
            if (numInfants < 5) changeGuests('numInfants', numInfants + 1);
          }}
        >
          <GuestCountSVG viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </GuestCountSVG>
        </GuestCountButton>
      </GuestCountContainer>
    </ChildrenInfantsContainer>
    <FooterContainer>
      <SubLabel>
        {`${maxGuests} maximum. Infants don’t count toward the number of guests.`}
      </SubLabel>
      <CloseButtonContainer>
        <CloseButton onClick={handleDropdownClick}>Close</CloseButton>
      </CloseButtonContainer>
    </FooterContainer>
  </DropdownContainer>
);

export default GuestDropdown;
