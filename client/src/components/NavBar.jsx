import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="form_nav-link">
      <NavLink to="/" className="link" activeClassName="active">
        All Product
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/addproduct">
        Add Product
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/orderlist">
        Purchase order
      </NavLink>
    </div>
  );
}
