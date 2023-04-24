import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.png";

function Layout() {
  return (
    <div>
      <nav
        //creating a navbar layout using bootsrap and linking it to pages on created react router
        className="navbar navbar-expand-sm bg-light"
      >
        <div className="container-fluid">
          <div
            className="navbar-brand"
            style={{
              fontFamily: "fantasy",
              fontStyle: "oblique",
              color: "grey",
            }}
          >
            Health-Wise
            <img src={logo} alt="" style={{ width: "3%", marginLeft: "5px" }} />
          </div>
          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <img src={menu} alt="" style={{ width: "20%" }} />
          </div>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav px-5 mx-5">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Info" className="nav-link">
                  Info
                </Link>
              </li>{" "}
              <li>
                <Link to="/add" className="nav-link">
                  Form
                </Link>
              </li>
              <li>
                <Link to="/Help" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
