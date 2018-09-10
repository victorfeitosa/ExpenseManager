import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import moment from 'moment';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Snacks',
  amount: 3000,
  createdAt: moment().valueOf()
}));
store.dispatch(addExpense({
  description: 'Groceries',
  amount: 10000,
  createdAt: moment().valueOf()
}));
store.dispatch(addExpense({
  description: 'Rent',
  amount: 109500,
  createdAt: moment().valueOf()
}));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>    
);


ReactDOM.render(jsx, document.getElementById("app"));
