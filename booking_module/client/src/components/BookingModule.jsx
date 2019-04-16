import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReportListing from './ReportListing';
import BookingContainer from './BookingContainer';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('./themes)
    font-family: 'Circular'
  }
  `;

const BookingModule = () => (
  <div id="bm-top-margin">
    <div id="bm-parent-container">
      <GlobalStyles />
      <BookingContainer />
      <ReportListing />
    </div>
  </div>
);

export default BookingModule;
