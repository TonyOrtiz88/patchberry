import React, { Component } from "react";
import { Link } from "react-router-dom";
import berry from "../../img/patchBerryLogo.jpg";

export default class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link class="nav-link active" to="#">
              Active
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
              Contact Us
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
              Link
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link disabled"
              to="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li>
        </ul>
        <nav class="navbar navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            <img
              src={berry}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Patch Berry
          </Link>
        </nav>
      </div>
    );
  }
}
