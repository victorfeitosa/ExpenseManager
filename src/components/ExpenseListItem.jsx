import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <p>{description}</p>
    <b>{amount}</b>
    <p>{createdAt}</p>

    <Link to={'/edit/' + id.toString()}>Edit</Link>
  </div>
);

export default ExpenseListItem;
