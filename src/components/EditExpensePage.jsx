import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render () {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className='page-header__title'>Edit expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            buttonText="Edit expense"
            onSubmit={this.onSubmit}>
          </ExpenseForm>
          <button
            className='button button--danger'
            onClick={this.onRemove}
          >
            Remove Expense &times;
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: ({id}) => dispatch(startRemoveExpense({id}))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((e) => e.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
