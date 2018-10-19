import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
   const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
   expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
   const wrapper = shallow(<ExpenseSummary expenseCount={12} expensesTotal={22335} />);
   expect(wrapper).toMatchSnapshot();
});
