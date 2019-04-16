/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import CalendarDOTW from './CalendarDOTW';
import CalendarTable from './CalendarTable';
import { DateData, formatDate, nextMonth, prevMonth } from '../helpers/Dates';

const CalendarContainer = styled.div`
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  border-radius: 3px;
  display: flex;
  flex-flow: row wrap;
  width: 326px;
  padding-top: 24px;
`;

const CalendarHeader = styled.div`
  display: flex;
  flex-flow row no-wrap;
  width: 100%;
  padding: 0px 22px;
`;

const ButtonContainer = styled.div`
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  border-radius: 3px;
  padding: 6px 9px;
  font-size: ${theme.fonts.size[2]};
  line-height: 10.92px;
  color: ${theme.palette[2]};
  // Todo: determine if right color, revise color names to describe how they're used
`;

const CalendarArrow = styled.svg`
  height: 19px; 
  width: 19px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const CalendarLabel = styled.span`
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 25.74px;
  color: ${theme.fonts.color[0]};
`;

const Calendar = ({
  currentDay,
  currentMonth = new Date().getMonth(),
  currentYear = new Date().getYear(),
  availability,
  checkInDate,
  checkOutDate,
  lastAvailable,
  minStay,
  changeCheckIn,
  changeCheckOut,
  changeMonth,
  toggleCalendar,
  fetchAvailability,
  checkInSelected,
  checkOutSelected,
}) => (
  <CalendarContainer>
    <CalendarHeader>
      <ButtonContainer onClick={() => {
        const lMo = prevMonth(currentMonth, currentYear);
        const accommodationID = window.location.pathname.split('/')[2] || Math.floor(Math.random() * 100);
        fetchAvailability(formatDate(new Date(lMo[1] + 1900, lMo[0], 1)), formatDate(new Date(currentYear + 1900, currentMonth, 1)), accommodationID);
        changeMonth('decrease'); 
      }}
      >
        <CalendarArrow viewBox="0 0 1000 1000">
          <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
        </CalendarArrow>
      </ButtonContainer>
      <CalendarLabel>
        {`${DateData[currentMonth].month} ${currentYear + 1900}`}
      </CalendarLabel>
      <ButtonContainer onClick={() => {
        const nxtMoStart = nextMonth(currentMonth, currentYear);
        const nxtMoEnd = nextMonth(nxtMoStart[0], nxtMoStart[1]);
        const accommodationID = window.location.pathname.split('/')[2] || Math.floor(Math.random() * 100);
        fetchAvailability(formatDate(new Date(nxtMoStart[1] + 1900, nxtMoStart[0], 1)), formatDate(new Date(nxtMoEnd[1] + 1900, nxtMoEnd[0], 1)), accommodationID);
        changeMonth('increase'); 
      }}
      >
        <CalendarArrow viewBox="0 0 1000 1000">
          <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
        </CalendarArrow>
      </ButtonContainer>
    </CalendarHeader>
    <CalendarDOTW />
    <CalendarTable
      currentDay={currentDay}
      currentMonth={currentMonth}
      currentYear={currentYear}
      availability={availability}
      checkInDate={checkInDate}
      checkOutDate={checkOutDate}
      lastAvailable={lastAvailable}
      minStay={minStay}
      changeCheckIn={changeCheckIn}
      changeCheckOut={changeCheckOut}
      changeMonth={changeMonth}
      toggleCalendar={toggleCalendar}
      checkInSelected={checkInSelected}
      checkOutSelected={checkOutSelected}
    />
    <div id="Empty space and ?" />
  </CalendarContainer>
);

export default Calendar;
