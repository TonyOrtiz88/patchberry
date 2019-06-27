import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminManage extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/">
          <i class="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <h1>Welcome to admin page</h1>
      </div>
    );
  }
}
