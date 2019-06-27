import React, { Component } from "react";
import { Link } from "react-router-dom";
import berry from "../../img/patchBerryLogo.jpg";

export default class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              Active
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">
              FAQ's
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li>
        </ul>

        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img
              src={berry}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <span className="color-secondary">Patch Berry</span>
          </Link>
        </nav>
      </div>
    );
  }
}
