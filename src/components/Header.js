import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/LoginPage";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="Navigation navbar navbar-expand-lg">
        <div className=" container-fluid">
          <Link className="navbar-brand" to="/">
            Blood Bank Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blood-banks">
                  Blood Banks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hospitals">
                  Hospitals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donors">
                  Donors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
