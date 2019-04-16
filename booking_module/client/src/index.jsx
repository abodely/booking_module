import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BookingModule from './components/BookingModule';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BookingModule />
  </Provider>,
  document.getElementById('booking-module'),
);
