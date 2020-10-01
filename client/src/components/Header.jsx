import React from "react";
import {} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-center p-3 px-3">
        <NavLink to="/">
          <h2>Logo</h2>
        </NavLink>
        <div>
          <h1>Inventory Management System</h1>
        </div>
        <div>
          <h2>Pb</h2>
        </div>
      </div>
    </div>
  );
}
