import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    {true && (
      <div>
        <h1>Expense Manager</h1>
        <nav>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/create" activeClassName="is-active">
            Create expense
          </NavLink>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
          <button onClick={startLogout}>Logout</button>
        </nav>
      </div>
    )}
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
