import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set textFilter', () => {
  const state = filtersReducer(undefined, {
   type: 'SET_TEXT_FILTER',
   text: 'some text'
});
  expect(state.text).toBe('some text');
});

test('should set startDate', () => {
  const state = filtersReducer(undefined, {
   type: 'SET_START_DATE',
   date: moment(0).add(1, 'days').valueOf()
});
  expect(state.startDate).toBe(moment(0).add(1, 'days').valueOf());
});

test('should set endDate', () => {
  const state = filtersReducer(undefined, {
   type: 'SET_END_DATE',
   date: moment(0).add(3, 'days').valueOf()
});
  expect(state.endDate).toBe(moment(0).add(3, 'days').valueOf());
});
