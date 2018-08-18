const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
   switch (action.type) {
     case 'ADD_EXPENSE':
       return [...state, action.expense];
       break;
     case 'EDIT_EXPENSE':
       return state.map((expense) => {
         if (expense.id === action.id) {
           console.log(action);
           return {
             ...expense,
             ...action.updates
           };
         } else {
           return expense;
         }
       });
       break;
     case 'REMOVE_EXPENSE':
       return state.filter(({ id }) => id !== action.id);
       break;
     default:
       return state;
   }
 };
 