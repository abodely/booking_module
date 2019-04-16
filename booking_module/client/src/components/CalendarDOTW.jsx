import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const CalendarLabelContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 13px;
`;

const CalendarParentList = styled.ul`
  padding: 0px;
`;

const CalendarListItem = styled.li`
  color: ${theme.palette.primary[2]};
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fonts.size[2]};
  width: 41px;
  text-align: center;
  list-style-type: none;
  list-style-position: outside;
  list-style-image: none;
  display: inline-block;
`;

const DayLabel = day => (
  <CalendarListItem>
    <small>{day}</small>
  </CalendarListItem>
);

const CalendarDOTW = () => {
  const DOTW = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(val => DayLabel(val));
  return (
    <CalendarLabelContainer>
      <CalendarParentList>
        {DOTW}
      </CalendarParentList>
    </CalendarLabelContainer>
  );
};

export default CalendarDOTW;
