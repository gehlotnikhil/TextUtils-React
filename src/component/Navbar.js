import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg text-white bg-dark  navbar-dark`}
        style={{ border: "1px solid black" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                {/* <a className="nav-link" href="">
                  About
                </a> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="">
                  Disabled
                </a>
              </li>
            </ul>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className={`form-check form-switch text-white`}
            >
              <div
                className="mt-1 d-flex mr-5 bg-danger "
                style={{ height: "50px", width: "50px" }}
                onClick={() => props.toggle("danger")}
              ></div>
              <div
                className="mt-1 d-flex mx-2 bg-secondary "
                style={{ height: "50px", width: "50px", border: '1px solid', borderColor:'black' }}
                onClick={() => props.toggle("secondary")}
              ></div>
              <div
                className="mt-1 d-flex mx-2 bg-warning "
                style={{ height: "50px", width: "50px", border: '1px solid', borderColor:'black' }}
                onClick={() => props.toggle("warning")}
              ></div>
              <div
                className="mt-1 d-flex mx-2 bg-primary "
                style={{ height: "50px", width: "50px", border: '1px solid', borderColor:'black' }}
                onClick={() => props.toggle("primary")}
              ></div>
              <div
                className="mt-1 d-flex mx-2 bg-white "
                style={{ height: "50px", width: "50px", border: '1px solid', borderColor:'black' }}
                onClick={() => props.toggle("white")}
              ></div>
              <div
                className="mt-1 d-flex mx-2 bg-dark "
                style={{ height: "50px", width: "50px", border: '1px solid', borderColor:'black' }}
                onClick={() => props.toggle("dark")}
              ></div>

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Enable Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };
