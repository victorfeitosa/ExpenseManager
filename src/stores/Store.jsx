import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Filters
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date
});

const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
});

// Expenses
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

const removeExpense = ({
  id
} = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = ({
  id,
  updates
} = {}
) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const getVisibleExpenses = (expenses, filters) => {

};

const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    break;
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          console.log(action);
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    break;
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
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
    case 'SORT_BY_AMOUNT':
      return{...state, sortBy: 'amount'}
    case 'SORT_BY_DATE':
      return{...state, sortBy: 'date'}
    break;
    case 'SET_START_DATE':
      return{...state, startDate: action.date}
      break;
    case 'SET_END_DATE':
      return{...state, endDate: action.date}
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

// store.dispatch(removeExpense({id: expense1.expense.id}));
// store.dispatch(removeExpense({id: expense3.expense.id}));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(editExpense({id: expense1.expense.id, amount: 3000}));

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(128));

export default store;

const demoState = {
  expenses: [{
    id: 0,
  }],
  filters: {
  }
}
