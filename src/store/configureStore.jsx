import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

import expensesActions, { addExpense } from '../actions/expenses';
import filtersActions from '../actions/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  store.dispatch(addExpense({
    description: 'Snacks',
    amount: 3000,
    createdAt: new Date().toUTCString()
  }));
  store.dispatch(addExpense({
    description: 'Groceries',
    amount: 10000,
    createdAt: new Date().toUTCString()
  }));

  return store;
}
