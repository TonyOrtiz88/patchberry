import React, { Component } from "react";
import { Link } from "react-router-dom";
import berry from "../../img/patchBerryLogo.jpg";

export default class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/about">
              About Us
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
        </ul>
        <div>
          {" "}
          <p className="text-center">
            Patch Berry &copy; 2019, All Rights Reserved{" "}
          </p>
        </div>

        <nav className="navbar navbar-light bg-light">
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
        </nav>
      </div>
    );
  }
}
