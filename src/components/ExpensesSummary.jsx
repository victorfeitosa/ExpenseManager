import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
   const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
   return (
      <h3>Viewing {expenseCount} {expensesWord} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h3>
   )
}

const mapStateToProps = (state) => {
   const visibleExpenses = selectExpenses(state.expenses, state.filters);
   return {
      expenseCount: visibleExpenses.length,
      expensesTotal: expensesTotal(visibleExpenses)
   }
};

export default connect(mapStateToProps)(ExpensesSummary);
