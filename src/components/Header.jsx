import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = (props) => (
   <header>
      {
         true &&
         <div>
            <h1>Expense Manager</h1>
            <nav>
               <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
               <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
               <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </nav>
         </div>
      }
   </header>
);

// const mapStateToProps = (state) => ({
//    isLoggedIn: state.app.loggedIn
// });

export default connect()(Header);
