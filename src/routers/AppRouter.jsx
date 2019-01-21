import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();
const AppRouter = () => (
   <Router history={history}>
      <Switch>
         <PrivateRoute path="/" component={ExpenseDashboardPage} exact={true} />
         <PublicRoute path="/login" component={LoginPage} exact={true} />
         <PrivateRoute path="/create"  component={AddExpensePage} />
         <PrivateRoute path="/edit/:id" component={EditExpensePage} />
         <Route component={NotFoundPage} />
      </Switch>
   </Router>
);

export default AppRouter;
