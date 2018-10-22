import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === 'date') this.props.sortByDate();
    else this.props.sortByAmount();
  };

  render () {
    return (
      <div>
        <input type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}/>
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="filter_start_date"
          endDate={this.props.filters.endDate}
          endDateId="filter_end_date"
          focusedInput={this.state.calendarFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
        >
        </DateRangePicker>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const matchDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date))
});

export default connect(mapStateToProps, matchDispatchToProps)(ExpenseListFilters);
