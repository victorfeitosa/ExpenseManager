import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../pages/Header';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import ExpenseDashboardPage from '../pages/ExpenseDashboardPage';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
);

export default AppRouter;