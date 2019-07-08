import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class profile extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/login">
          <i class="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <h1>welcome to profile page</h1>
      </div>
    );
  }
}
