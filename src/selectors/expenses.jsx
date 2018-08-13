export default (
   expenses,
   {
      text,
      sortBy,
      startDate,
      endDate
   }) => {
   const visible = expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt;
      } else if (sortBy === 'amount') {
         return a.amount < b.amount;
      } else {
         return true;
      }
   });

   return visible
};
