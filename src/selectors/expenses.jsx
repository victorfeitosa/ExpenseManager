import moment from 'moment';

export default (
   expenses,
   {
      text,
      sortBy,
      startDate,
      endDate
   }) => {
      const visible = expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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
