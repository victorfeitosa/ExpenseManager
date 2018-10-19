export default (expenses = []) => {
   const result = expenses
      .map((expense) => expense.amount)
      .reduce((acc, expense) => acc + expense, 0);
   return result;
};
