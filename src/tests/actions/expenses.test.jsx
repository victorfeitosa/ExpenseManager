import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123ABC' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123ABC'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense({ id: '123ABC', updates: { note: 'New note value' } });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123ABC',
    updates: { note: 'New note value' }
  });
});

test('should set up add expense action object', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});

  const expenseData = { description: 'Mouse', amount: 3000, createdAt: 1000, note: 'Some note' };
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});

  const expenseDefaults = { description: '', amount: 0, createdAt: 0, note: '' };
  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      done();
    });
});

// test('should set up add expense action object with default values', () => {
//    const defaultExpense = {description: '', note: '', amount: 0, createdAt: 0};
//    const action = addExpense();
//    expect(action).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//          ...defaultExpense,
//          id: expect.any(String)
//       }
//    });
// });
