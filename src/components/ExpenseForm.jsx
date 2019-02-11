import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { Link } from 'react-router-dom';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    const expression = /^\d{1,}(\.\d{0,2})?$/
    if (!amount || amount.match(expression)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Error, please provide description and amount.'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  onCancelSubmission = (e) => {
    e.preventDefault();
    console.log(this.props.history);
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          type="text"
          className='text-input'
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          className='text-input'
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          block
        />
        <textarea
          className='textarea'
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div>
          <button
            className='button'
            type='submit'
          >
            {this.props.buttonText}
          </button>
          <Link
            className='button button--tertiary'
            to='/'
          >
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}