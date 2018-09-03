import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '5',
    description: 'Chips',
    note: '',
    amount: 399,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toContainEqual(expense);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
       description: 'Breakfast',
       amount: 2000,
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toContainEqual({...expenses[2], ...action.updates});
});

test('should not edit an expense if a non valid expense id is found', () => {
   const action = {
     type: 'EDIT_EXPENSE',
     id: '-1',
     updates: {
        description: 'Breakfast',
        amount: 2000,
     }
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
 });
