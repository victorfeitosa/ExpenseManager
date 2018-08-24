import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        buttonText="Edit expense"
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(editExpense({
            id: props.expense.id,
            updates: expense
          }));
          props.history.push('/');
        }}>
      </ExpenseForm>
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove Expense &times;</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((e) => e.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);
