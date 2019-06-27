import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Forum extends Component {
  render() {
    return (
      <div>
        <Link className="color-main float-left " to="/">
          <i className="fas fa-chevron-circle-left fa-2x" />
        </Link>
        <h1>welcome to the Forum page</h1>
      </div>
    );
  }
}
