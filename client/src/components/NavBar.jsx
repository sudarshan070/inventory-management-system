import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  return (
    <div className="form_nav-link">
      <NavLink
        to="/"
        className="link"
        activeClassName="active"
        isActive={checkActive}
      >
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
