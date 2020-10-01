import React from "react";
import {} from "react-bootstrap";
import logo from "../media/abc.png";

export default function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between p-3">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button type="button" className="btn btn-outline-primary">
            Add product
          </button>
          <button type="button" className="btn btn-outline-success ml-4">
            Order Product
          </button>
        </div>
      </div>
    </div>
  );
}
