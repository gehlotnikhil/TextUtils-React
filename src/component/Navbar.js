import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg text-${props.mode==='blue'||'black'?'white':'black'} bg-${props.mode==='blue'?'primary':props.mode}  navbar-${props.mode==='blue'?'dark':props.mode}`} style = {{border: '1px solid black'}}>
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
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <div style={{display: 'flex', flexDirection: 'row'}} className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>               
             <div id = "first" style={{marginRight: '58px'}}> 
             <input className="form-check-input " style={{backgroundColor: 'blue'}} onClick={props.toggleBlue} type="checkbox" role="switch" id="flexSwitchCheckChecked1"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked1">
                Enable Blue Mode
              </label></div>
              <div  id = "second"><input className="form-check-input " onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Enable Dark Mode
              </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };
