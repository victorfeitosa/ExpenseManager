import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
   const action = removeExpense({ id: '123ABC'});
   expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123ABC'
   });
});

test('should set up edit expense action object', () => {
   const action = editExpense({ id: '123ABC', updates: { note: 'New note value' }});
   expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123ABC',
      updates: { note: 'New note value' }
   });
});

test('should set up add expense action object', () => {
   const expenseData = {
      description: 'Rent',
      amount: 1095,
      note: 'Last month rent',
      createdAt: 12000
   };
   const action = addExpense(expenseData);
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         ...expenseData,
         id: expect.any(String)
      }
   });
});

test('should set up add expense action object with default values', () => {
   const defaultExpense = {description: '', note: '', amount: 0, createdAt: 0};
   const action = addExpense();
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         ...defaultExpense,
         id: expect.any(String)
      }
   });
});
