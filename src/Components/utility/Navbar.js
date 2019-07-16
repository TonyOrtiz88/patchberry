import React, { Component } from "react";
import { Link } from "react-router-dom";
import berry from "../../img/patchBerryLogo.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              src={berry}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <span className="color-secondary">Patch Berry</span>
          </Link>
          <button
            className="navbar-toggler btn-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login/Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forum">
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Genre
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Hip-Hop/Rap
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Instrumentals/Beats
                  </Link>
                  <Link className="dropdown-item" to="#">
                    R&B/Soul
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="#">
                    Merchandise
                  </Link>
                </div>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success color-main-bg my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
