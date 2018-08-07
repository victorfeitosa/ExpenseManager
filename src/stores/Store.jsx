import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expenses
// Add expense
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// Remove expense
const removeExpense = ({
  id
} = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Edit expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Set text filter
const setTextFilter = (text='') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// Reducers
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    break;
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    break;
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    break;
    default:
      return state;
  }
};

// Filters
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    break;
    default:
      return state;
  }
};

//Store 
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({description: 'One', amount: 300}));
const expense2 = store.dispatch(addExpense({description: 'This is expense 2', amount: 200}));
const expense3 = store.dispatch(addExpense({description: 'Exp3', amount: 100}));

store.dispatch(removeExpense({id: expense1.expense.id}));
store.dispatch(removeExpense({id: expense3.expense.id}));

store.dispatch(editExpense(expense2.expense.id, {amount: 500}));

store.dispatch(setTextFilter('This'));

export default store;

const demoState = {
  expenses: [{
    id: 0,
  }],
  filters: {
  }
}
