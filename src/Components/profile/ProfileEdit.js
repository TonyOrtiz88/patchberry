import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="../profile">
          <i class="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <h1>Profile Edit Page</h1>
      </div>
    );
  }
}
