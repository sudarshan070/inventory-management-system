import React from "react";
import {} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../media/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-center p-3 px-3">
        <NavLink to="/">
          <img style={{ width: 100 }} src={logo} alt="logo" />
        </NavLink>
        <div>
          <h1>Inventory Management System</h1>
        </div>
        <div>
          <h2>Pricebid</h2>
        </div>
      </div>
    </div>
  );
}
