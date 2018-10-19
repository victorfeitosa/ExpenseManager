import selectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
   const result = selectExpensesTotal([]);
   expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
   const singleExpense = [expenses[0]];
   const result = selectExpensesTotal(singleExpense)
   expect(result).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
   const result = selectExpensesTotal(expenses)
   expect(result).toBe(1545155);
});
