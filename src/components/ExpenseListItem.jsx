import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <p>{description}</p>
    <b>{amount}</b>
    <p>{createdAt}</p>

    <button onClick={() => {
      console.log(id);
      dispatch(removeExpense({id}));
    }}>&times;</button> 
  </div>
);

export default connect()(ExpenseListItem);
