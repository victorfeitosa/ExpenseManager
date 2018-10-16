import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <p>{description}</p>
    <b>{numeral(amount / 100).format('$0,0.00')}</b>
    <p> - {moment(createdAt).format('DD/MM/YYYY')}</p>

    <Link to={'/edit/' + id.toString()}>Edit</Link>
  </div>
);

export default ExpenseListItem;
