import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
   const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
   return (
      <div className='page-header'>
         <div className='content-container'>
            <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expensesWord} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span></h1>
            <div className='page-header__actions'>
               <Link className='button' to='/create'>Add expense</Link>
            </div>
         </div>
      </div>
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
