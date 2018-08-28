import moment from 'moment';

// Filters
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: moment().startOf('month'),
   endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SORT_BY_AMOUNT':
         return { ...state, sortBy: 'amount' }
      case 'SORT_BY_DATE':
         return { ...state, sortBy: 'date' }
         break;
      case 'SET_START_DATE':
         return { ...state, startDate: action.date }
         break;
      case 'SET_END_DATE':
         return { ...state, endDate: action.date }
         break;
      case 'SET_TEXT_FILTER':
         return { ...state, text: action.text };
         break;
      default:
         return state;
   }
};
