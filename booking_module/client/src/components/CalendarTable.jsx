/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import { DateData, formatDate, getCheckInDay } from '../helpers/Dates';

// Todo: fix spacing/margins

const StyledCalendarTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  margin-bottom: 16px;
`;

const TableBody = styled.tbody`
  display; table-row-group;
`;

const EmptyCell = styled.td`
  width: 38px;
  height: 41px;
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[2]};
  text-align: center;
`;

const AvailableDay = styled(EmptyCell)`
  border: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
  color: ${theme.palette.primary[1]};
`;

const UnavailableDay = styled(EmptyCell)`
  border: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
  text-decoration: line-through;
  color: ${theme.palette.primary[5]};
  cursor: default;
`;

const CalendarTable = ({
  currentMonth = 3,
  currentYear = 119,
  availability = {},
  checkInDate,
  lastAvailable,
  minStay,
  checkInSelected,
  checkOutSelected,
  changeCheckIn,
  changeCheckOut,
}) => {
  const firstDay = new Date(`${currentYear + 1900} ${DateData[currentMonth].month} 1`).getDay();
  const days = [];
  const today = formatDate(Date.now());

  for (let i = 0; i < firstDay; i += 1) {
    days.push(<EmptyCell />);
  }
  if (checkInSelected) {
    for (let j = 1; j <= DateData[currentMonth].numDays; j += 1) {
      const date = formatDate(new Date(currentYear + 1900, currentMonth, j));
      // eslint-disable-next-line no-unused-expressions
      availability[date]
        ? (days.push(<UnavailableDay id={date}>{j}</UnavailableDay>))
        : date < today
          ? (days.push(<UnavailableDay id={date}>{j}</UnavailableDay>))
          : (days.push(<AvailableDay id={date} onClick={e => changeCheckIn(e.target.id)}>{j}</AvailableDay>));
    }
  } else if (checkOutSelected) {
    let firstUnavail = false;
    const checkInDay = getCheckInDay(checkInDate);
    for (let j = 1; j <= DateData[currentMonth].numDays; j += 1) {
      const date = formatDate(new Date(currentYear + 1900, currentMonth, j));
      if (j > checkInDay && availability[date]) {firstUnavail = true;}
      if (j < checkInDay || availability[date] || date < today || firstUnavail) {
        days.push(<UnavailableDay id={date}>{j}</UnavailableDay>);
      } else {
        (days.push(<AvailableDay id={date} onClick={e => changeCheckOut(e.target.id)}>{j}</AvailableDay>));
      }
    }
  }
  const days1 = days.slice(0, 7);
  const days2 = days.slice(7, 14);
  const days3 = days.slice(14, 21);
  const days4 = days.slice(21, 28);
  let days5;
  let days6;
  if (days.length > 34) {
    days5 = days.slice(28, 35);
    days6 = days.slice(35);
  } else {
    days5 = days.slice(28);
  }
  return (
    <StyledCalendarTable>
      <TableBody>
        <tr>
          {days1}
        </tr>
        <tr>
          {days2}
        </tr>
        <tr>
          {days3}
        </tr>
        <tr>
          {days4}
        </tr>
        <tr>
          {days5}
        </tr>
        {
          days.length > 34
            ? (<tr>{days6}</tr>)
            : ''
        }
      </TableBody>
    </StyledCalendarTable>
  );
};


export default CalendarTable;
