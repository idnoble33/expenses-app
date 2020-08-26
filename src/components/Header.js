import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
   <h1>Expensify</h1>
   <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
   <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
   {/* <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> */}
   <NavLink to="/help" activeClassName="is-active">Expense Help</NavLink>
  </div>

);

export default Header;