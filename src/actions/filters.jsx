// Filters
export const sortByDate = () => ({
   type: 'SORT_BY_DATE'
 });
 
 export const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT'
 });
 
 export const setStartDate = (date = undefined) => ({
   type: 'SET_START_DATE',
   date
 });
 
 export const setEndDate = (date = undefined) => ({
   type: 'SET_END_DATE',
   date
 });
 
 export const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
 });
 