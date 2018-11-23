import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render () {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          buttonText="Edit expense"
          onSubmit={this.onSubmit}>
        </ExpenseForm>
        <button onClick={this.onRemove}>Remove Expense &times;</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, updates) => dispatch(editExpense({id, updates})),
  startRemoveExpense: ({id}) => dispatch(startRemoveExpense({id}))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((e) => e.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
